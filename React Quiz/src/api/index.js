import { Server } from "miragejs";
import data from "./data.json";

const initServer = () =>
  new Server({
    seeds(server) {
      server.db.loadData({
        quiz: data,
      });
    },

    routes() {
      this.logging = true;
      this.namespace = "api";
      this.timing = 200;

      this.get("/quiz", (schema) => schema.db.quiz);
    },
  });

export default initServer;
