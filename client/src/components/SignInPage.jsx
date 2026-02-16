import { useState } from "react"


export const SignInPage=()=>{
    const [userName, setUserName]=useState("")
    const [password, setPassword]=useState("")
    const [message, setMessage]=useState("Welcome")

    const handleSubmit =()=>{
        setMessage(`Hii \n Name: ${userName}\n Password: ${password}`)
    }

    return(
        <>
            <h2>Name</h2>
            <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
            <br />
            <h2>Password</h2>
            <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            <p>Msg: {message}</p>
        
        </>
    )
}