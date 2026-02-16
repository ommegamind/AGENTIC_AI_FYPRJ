import express from "express"

const app= express()
const PORT=3000;

app.get("/",(req, res)=>{
    res.end("HEY YOU GOT THIS FAR?")
})

app.listen(PORT, ()=>{
    console.log("server started...")
})