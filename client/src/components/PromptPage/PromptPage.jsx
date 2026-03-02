import{Link, useLoaderData} from "react-router"
import { removeUser } from "../../controller/userRegistration"
import { useState } from "react"
import { submitPrompt } from "./promptHandler";


export const PromptPage=()=>{
    const pageVisiblity = useLoaderData();
    const[userPrompt, setUserPrompt]=useState("");
    const[displayResponse, setDisplayResponse]=useState("Welcome..");

    if(!pageVisiblity){
        window.location.assign("http://localhost:3000/signin/check");
    }else{
        return(<>
            <Link to={"/"}>Home</Link>
            <br />

            <h1>Enter prompt</h1>

            <input type="text" placeholder="Enter prompt" 
            onChange={(e)=>setUserPrompt(e.target.value)}/>

            <button 
                onClick={async ()=>{
                    console.log("prompt component: ",userPrompt);
                    const modelResponse= await submitPrompt(userPrompt);
                    setDisplayResponse(modelResponse);
                    setUserPrompt("");
                }}
            >Submit</button>
            <br />

            <p>{displayResponse}</p>
            <br />

            <button 
                onClick={async()=>{
                    await removeUser();
                }}
            >Log Out</button>

        </>)
    }
}