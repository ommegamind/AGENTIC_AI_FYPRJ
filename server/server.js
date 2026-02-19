import express from "express"
import cors from "cors"
import signInRouter from "./router/pgRouter.js"

const app= express()
const PORT=3000;

app.use(cors());
app.use(express.json());
app.use("/signin", signInRouter)

app.get("/",(req, res)=>{
    res.end("HEY YOU GOT THIS FAR?")
})

app.listen(PORT, ()=>{
    console.log("server started...")
})