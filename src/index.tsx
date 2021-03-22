import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";

import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de Website",
          type: "deposit",
          category: "Dev",
          amount: 1280.05,
          createdAt: new Date("02-14-2021 09:00:00"),
        },
        {
          id: 2,
          title: "Freelancer de Identidade Visual",
          type: "deposit",
          category: "Dev",
          amount: 280.35,
          createdAt: new Date("02-12-2021 11:00:00"),
        },
        {
          id: 3,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1350.08,
          createdAt: new Date("03-12-2021 19:00:00"),
        },
        {
          id: 4,
          title: "Condominio",
          type: "withdraw",
          category: "Casa",
          amount: 350,
          createdAt: new Date("03-13-2021 17:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
