import { useState } from "react"
import {useMutation} from "@tanstack/react-query"
import { addUser } from "../controller/userRegistration.js"

export const SignInPage=()=>{
    const [userName, setUserName]=useState("")
    const [userPassword, setPassword]=useState("")
    const [message, setMessage]=useState("Welcome")
    const mutation = useMutation((newUser)=>addUser(newUser))

    const handleSubmit =()=>{
        setMessage(`Hii \n Name: ${userName}\n Password: ${userPassword}`)

        const signInBody={
            user_name: userName,
            user_password: userPassword,
        }
        mutation.mutate(signInBody);

        setUserName("");
        setPassword("");
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