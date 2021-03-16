import express from "express";
import routes from "./routes";

import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors())

/**
 * Programatically create all routes
 */
Object.keys(routes).forEach((key) => {
  const route = routes[key];
  switch (route.type) {
    case "get": {
      app.get(route.path, route.callback);
      break;
    }
    case "post": {
      app.post(route.path, route.callback);
      break;
    }
    default: {
      throw Error(`Type: ${route.type} is not a valid route type`);
    }
  }
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
