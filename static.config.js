import { reloadRoutes } from "react-static/node";
import jdown from "jdown";
import chokidar from "chokidar";

chokidar.watch("content").on("all", () => reloadRoutes());

export default {
  getSiteData: () => ({
    title: "six ash folio"
  }),
  getRoutes: async () => {
    const { about, work } = await jdown("content");

    const entries = Object.values(work);

    // Gather tags and count
    const tags = {};
    entries.forEach(entry => {
      if (entry.tags) {
        entry.tags.forEach(tag => (tags[tag] = (tags[tag] || 0) + 1));
      }
    });

    return [
      {
        path: "/",
        getData: () => ({
          entries,
          tags
        })
      },
      {
        path: "/about",
        getData: () => ({
          ...about
        })
      }
    ];
  }
};
