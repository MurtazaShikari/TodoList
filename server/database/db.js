import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.yllxfuc.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URL);

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting to the Database", error.message);
  });
};

export default Connection;
