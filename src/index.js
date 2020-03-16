// Express Server
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";
import models from "./models";

const app = express();
mongoose.connect("mongodb://localhost:3000");

// Application-Level Middleware
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", routes.users);
app.use("/messages", routes.messages);

// Start Server
app.listen(3000, () => console.log(`Example app listening on port 3000!`));
