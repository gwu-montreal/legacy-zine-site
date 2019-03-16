import { reloadRoutes } from "react-static/node";
import jdown from "jdown";
import kebabCase from "just-kebab-case";
import chokidar from "chokidar";

chokidar.watch("content").on("all", () => reloadRoutes());

export default {
  getSiteData: () => ({
    title: "Game Workers Unite Zine - GDC 2019"
  }),
  getRoutes: async () => {
    const { articles, extradata } = await jdown("content");

    const { openingStatement } = extradata;

    const routes = Object.entries(articles).map(([filename, data]) => {
      // re-kebab-case snakeCased filename and use it as slug if we don't have
      // one explicitly defined
      const slug = data.slug || kebabCase(filename);

      return {
        path: slug,
        component: "src/containers/Article",
        getData: () => data
      };
    });

    return [
      {
        path: "/",
        getData: () => ({
          openingStatement,
          routes: routes.map(r => r.path)
        })
      },
      ...routes
    ];
  }
};
