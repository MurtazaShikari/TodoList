import express from "express";
import cors from "cors";

import Connection from "./database/db.js";

const app = express();

app.use(cors());

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`Your Server is running successfully on PORT ${PORT}`)
);

Connection();

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// mongoose
//   .connect("", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Failed to connect to MongoDB", err));

// const todoCardSchema = new mongoose.Schema({
//   taskName: {
//     type: String,
//     required: true,
//   },
//   comment: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
// });

// const TodoCard = mongoose.model("TodoCard", todoCardSchema);

// const app = express();

// app.use(bodyParser.json());

// app.post("/addtodoCard", async (req, res) => {
//   const { taskName, comment, date } = req.body;

//   if (!taskName || !comment || !date) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   const todoCard = new TodoCard({
//     taskName,
//     comment,
//     date,
//   });

//   try {
//     const savedTodoCard = await todoCard.save();
//     return res.status(201).json({ id: savedTodoCard._id });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Failed to add todo card" });
//   }
// });

// app.get("/getAllTodoCards", async (req, res) => {
//   try {
//     const todoCards = await TodoCard.find().sort({ date: -1 }).exec();
//     return res.status(200).json(todoCards);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Failed to get all todo cards" });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
