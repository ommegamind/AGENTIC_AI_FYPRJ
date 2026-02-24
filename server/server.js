import express from "express"
import cors from "cors"
import signInRouter from "./router/pgRouter.js"
import cookieParser from "cookie-parser"


const app= express()
const PORT=3000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/signin", signInRouter)

app.get("/",(req, res)=>{
    res.end("HEY YOU GOT THIS FAR?")
})

app.listen(PORT, ()=>{
    console.log("server started...")
})