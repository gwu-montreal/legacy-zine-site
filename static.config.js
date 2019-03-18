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
  }
};
