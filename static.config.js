import React from 'react';
import { reloadRoutes } from "react-static/node";
import jdown from "jdown";
import kebabCase from "just-kebab-case";
import chokidar from "chokidar";

import articleList from "./contents";

chokidar.watch("content").on("all", () => reloadRoutes());

export default {
  getSiteData: async () => {
    const { articles } = await jdown("content");

    const articlesByOriginalFilename = {};
    Object.entries(articles).forEach(([filename, data]) => {
      const originalFilename = kebabCase(filename);
      articlesByOriginalFilename[originalFilename] = data;
    });

    const tableOfContents = articleList.map(filename => ({
      route: "/" + filename,
      title: articlesByOriginalFilename[filename].title,
      articleType: articlesByOriginalFilename[filename].type
    }));

    return {
      title: "Game Workers Unite Zine - GDC 2019",
      tableOfContents
    };
  },
  getRoutes: async () => {
    const { articles, extradata } = await jdown("content");

    const { openingStatement, endnotes } = extradata;

    const articlesByOriginalFilename = {};
    Object.entries(articles).forEach(([filename, data]) => {
      const originalFilename = kebabCase(filename);
      articlesByOriginalFilename[originalFilename] = data;
    });

    const routes = Object.entries(articlesByOriginalFilename)
      .map(([filename, data]) => {
        const articleIndex = articleList.indexOf(filename);
        if (articleIndex === -1) {
          console.warn(
            `file found in articles but not in contents.js: ${filename}\nexcluding from routes.`
          );

          return null;
        }

        // FIXME: don't use slugs for now, we rely on filename as route in other
        // places curently
        // const slug = data.slug || filename;
        const slug = filename;

        // TODO: yeah this isn't dry or whatever, simplify later
        const prevPage =
          articleIndex > 0
            ? {
                route: "/" + articleList[articleIndex - 1],
                name:
                  articlesByOriginalFilename[articleList[articleIndex - 1]]
                    .title
              }
            : null;

        const nextPage =
          articleIndex < articleList.length - 1
            ? {
                route: "/" + articleList[articleIndex + 1],
                name:
                  articlesByOriginalFilename[articleList[articleIndex + 1]]
                    .title
              }
            : null;

        return {
          path: slug,
          component: (() => {
            switch (data.type) {
              case "unionfaqs":
                return "src/containers/UnionFAQs";
              case "map":
                return "src/containers/Map";
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
        };
      })
      .filter(r => r); // filter nulls

    return [
      {
        path: "/",
        getData: () => ({
          openingStatement
        })
      },
      {
        path: "/endnotes",
        component: "src/containers/Article",
        getData: () => ({
          ...endnotes
        })
      },
      ...routes
    ];
  },
  Document: ({ Html, Head, Body, children, siteData }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <meta property="og:description" content="Read the latest zine from Game Workers Unite!" />
        <meta property="og:image" content="http://zines.gwumtl.com/images/waluigi_social_crop.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
};
