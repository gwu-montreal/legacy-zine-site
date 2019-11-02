import React from "react";
import { reloadRoutes } from "react-static/node";
import jdown from "jdown";
import kebabCase from "just-kebab-case";
import chokidar from "chokidar";

import articleList from "./contents";

// the chokidar watcher needs to be closed after a build successfully completes
let watcher;

// just hoisting this as reminder for localization later
const metaDescription = "Read the latest zine from Game Workers Unite!";

export default {
  getSiteData: async () => {
    // we can't do jdown("content") because
    // jdown doesn't support deep folder structures
    const articles = await jdown("content/articles");

    const articlesByOriginalArticleName = {};
    Object.entries(articles).forEach(([articleName, dataByLanguage]) => {
      const originalArticleName = kebabCase(articleName);
      articlesByOriginalArticleName[originalArticleName] = dataByLanguage;
    });

    // TODO: make this work for all languages not just English
    const tableOfContents = articleList.map(articleName => ({
      route: "/" + articleName,
      title: articlesByOriginalArticleName[articleName].en.title,
      articleType: articlesByOriginalArticleName[articleName].en.type
    }));

    return {
      title: "Game Workers Unite Zine - GDC 2019",
      tableOfContents
    };
  },
  getRoutes: async () => {
    const articles = await jdown("content/articles");
    const extradata = await jdown("content/extradata");

    const {
      "opening-statement": openingStatement,
      endnotes,
      "how-to-print": howToPrint
    } = extradata;

    const articlesByOriginalArticleName = {};
    Object.entries(articles).forEach(([articleName, dataByLanguage]) => {
      const originalArticleName = kebabCase(articleName);
      articlesByOriginalArticleName[originalArticleName] = dataByLanguage;
    });

    const routes = Object.entries(articlesByOriginalArticleName)
      .reduce((routes, [articleName, dataByLanguage]) => {
        const articleIndex = articleList.indexOf(articleName);
        if (articleIndex === -1) {
          console.warn(
            `file found in articles but not in contents.js: ${articleName}\nexcluding from routes.`
          );

          return routes;
        }

        // TODO: yeah this isn't dry or whatever, simplify later
        const prevPage =
          articleIndex > 0
            ? {
                route: "/" + articleList[articleIndex - 1],
                name:
                  articlesByOriginalArticleName[articleList[articleIndex - 1]]
                    .title
              }
            : null;

        const nextPage =
          articleIndex < articleList.length - 1
            ? {
                route: "/" + articleList[articleIndex + 1],
                name:
                  articlesByOriginalArticleName[articleList[articleIndex + 1]]
                    .title
              }
            : null;

        routes = routes.concat(Object.entries(dataByLanguage).map(([language, data]) => ({
          path: `/${language}/${articleName}`,
          component: (() => {
            switch (data.type) {
              case "unionfaqs":
                return "src/containers/UnionFAQs";
              case "map":
                return "src/containers/Map";
              case "bare":
                return "src/containers/BareArticle";
              case "article":
              default:
                return "src/containers/Article";
            }
          })(),
          getData: () => ({
            ...data,
            prevPage,
            nextPage
          })
        })));

        // redirect old paths to en/ path
        // TODO: implement Redirect component
        routes.push({
          path: `/${articleName}`,
          component: "src/containers/Redirect",
          getData: () => ({
            redirectPath: `/en/${articleName}`
          })
        });

        return routes;
      }, []);


    Object.entries(openingStatement).forEach(([language, data]) => {
      routes.push({
        path: `/${language}`,
        component: "src/containers/OpeningStatement",
        getData: () => ({
          openingStatement: data
        })
      });
    });
    routes.push({
      path: "/",
      component: "src/containers/Redirect",
      getData: () => ({
        redirectPath: "/en"
      })
    });

    Object.entries(endnotes).forEach(([language, data]) => {
      routes.push({
        path: `/${language}/endnotes`,
        component: "src/containers/Article",
        getData: () => ({
          ...data
        })
      });
    });
    routes.push({
      path: "/endnotes",
      component: "src/containers/Redirect",
      getData: () => ({
        redirectPath: "/en/endnotes"
      })
    });

    Object.entries(howToPrint).forEach(([language, data]) => {
      routes.push({
        path: `/${language}/how-to-print`,
        component: "src/containers/Article",
        getData: () => ({
          ...data
        }),
      });
    });
    routes.push({
      path: "/how-to-print",
      component: "src/containers/Redirect",
      getData: () => ({
        redirectPath: "/en/how-to-print"
      })
    });

    return routes;
  },
  Document: ({ Html, Head, Body, children, siteData }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metaDescription} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>{siteData.title}</title>
        <meta property="og:title" content={siteData.title} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://zines.gwumtl.com/images/waluigi_social_crop.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Body>{children}</Body>
      <script async src="/fathom.js" />
    </Html>
  ),
  onStart: () => {
    watcher = chokidar
      .watch("content", { ignoreInitial: true })
      .on("all", (eventName, path) => {
        console.log(`${eventName}: ${path}`);
        // reloading routes is completely broken, see
        // https://github.com/nozzle/react-static/issues/985
        // but either way the server needs to be restarted on every content
        // change to see updates, so it doesn't matter if we keep it
        reloadRoutes();
      });
  },
  onBuild: () => {
    if (watcher) watcher.close();
  }
};
