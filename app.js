import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js"
const app = express();


Lab5(app);
HelloRoutes(app);
app.listen(4000);