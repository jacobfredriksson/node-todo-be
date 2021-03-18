import { schema } from "./lib/schema";
import { Route, Routes, Item } from "./types";

// Libs
import database from "./firebase";

// Utils
import handleError from "./lib/handleError";

const ROOT: Route = {
  type: "get",
  path: "/",
  callback: (req, res) => {
    res.json({
      message: "To see the list of items, go to /items.",
    });
  },
};

const ITEMS: Route = {
  type: "get",
  path: "/items",
  callback: (req, res) => {
    database
      .collection("todos")
      .get()
      .then((snapshot) => {
        let result: Item[] = [];

        snapshot.forEach((doc) => {
          const document = { id: doc.id, todo: doc.data().todo };
          result.push(document);
        });

        res.json(result);
      });
  },
};

const CREATE: Route = {
  type: "post",
  path: "/items/create",
  callback: async (req, res) => {
    const newItem = { todo: req.body.todo };
    try {
      const value = await schema.create.validateAsync(newItem);
      database.collection("todos").add(value);
      res.json({ status: "OK" });
    } catch (error) {
      handleError(error, res);
    }
  },
};

const DELETE: Route = {
  type: "post",
  path: "/items/delete",
  callback: async (req, res) => {
    const itemId = req.body.id;

    try {
      const value = await schema.delete.validateAsync(itemId);
      database.collection("todos").doc(value).delete();
      res.json({ status: "OK" });
    } catch (error) {
      handleError(error, res);
    }
  },
};

const UPDATE: Route = {
  type: "post",
  path: "/items/update",
  callback: async (req, res) => {
    const id = req.body.id;
    const todo = req.body.todo;

    try {
      const value = await schema.update.validateAsync({ id, todo });
      await database
        .collection("todos")
        .doc(value.id)
        .update({ todo: value.todo });

      res.json({ status: "OK" });
    } catch (error) {
      handleError(error, res);
    }
  },
};

const routes: Routes = {
  ROOT,
  ITEMS,
  CREATE,
  DELETE,
  UPDATE
};

export default routes;
