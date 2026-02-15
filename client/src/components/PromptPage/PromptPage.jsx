import{Link, useLoaderData} from "react-router"


export const PromptPage=()=>{
    const response= useLoaderData()

    if(!response){
        return(<>
            <Link to={"/"}>Home</Link>
            <br />
            <h1>SING IN PLZ</h1>
        </>)
    }

    return(<>
        <Link to={"/"}>Home</Link>
        <br />
        <h1>Enter prompt</h1>
        <input type="text" />
        <button>Submit</button>
    </>)
}