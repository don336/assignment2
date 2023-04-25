import express from "express";
import cors from "cors";
import connect from "../../db/mongoose";
import route from "./Route/route";
connect();
const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

export default app;
