import{Link, useLoaderData} from "react-router"
import { removeUser } from "../../controller/userRegistration"
import { useState } from "react"


export const PromptPage=()=>{
    const[pageVisiblity, setPageVisiblity]= useState(useLoaderData());

    if(!pageVisiblity){
        return(<>
            <Link to={"/"}>Home</Link>
            <br />
            <h1>SING IN PLZ</h1>
            <Link to={"/sign-in"}>SignIn</Link>
        </>)
    }

    return(<>
        <Link to={"/"}>Home</Link>
        <br />
        <h1>Enter prompt</h1>
        <input type="text" />
        <button>Submit</button>
        <br />
        <button onClick={async()=>{
            await removeUser();
            setPageVisiblity(false);
            }}>Log Out</button>
    </>)
}