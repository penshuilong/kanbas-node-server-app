import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import "dotenv/config";
import session from "express-session";


mongoose.connect("mongodb://localhost:27017/kanbas");
const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL,
        'http://localhost:3000',
    ],
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
HelloRoutes(app);
app.listen(process.env.PORT || 4000);