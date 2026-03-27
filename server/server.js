import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import session from "express-session";

import userAuthRouter from "./router/userAuthRouter.js"
import cookieRouter from "./router/cookieRouter.js"
import promptRouter from "./router/promptRouter.js"
import { authScreenHandler } from "./controller/signInHandlers.js";


const app= express()
const PORT = process.env.PORT || 3000;

app.set('trust proxy', 1);
app.use(cors({
origin: [
  // "http://localhost:5173",
  "https://clientcerbi.vercel.app",
  "https://clientcerbi-m414ukgct-ommegaminds-projects.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,        // REQUIRED for HTTPS
    sameSite: "none"     // REQUIRED for cross-site
  }
}));

app.use("/signin", userAuthRouter)
app.use("/cookies", cookieRouter)
app.use("/prompts", promptRouter)

app.get("/authScreen",authScreenHandler)

app.get("/",(req, res)=>{
    res.end("HEY YOU GOT THIS FAR?")
})

app.listen(PORT, ()=>{
    console.log("server started...")
})