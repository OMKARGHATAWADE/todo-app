import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDb from "./config/database.js";
import todoRouter from "./routes/todo.js"

dotenv.config();
connectDb();
const app = express();
app.use(bodyParser.json());

app.use("/api/v1",todoRouter);

app.listen(4000, () => {
  console.log("Server running at port no 4000");
});
