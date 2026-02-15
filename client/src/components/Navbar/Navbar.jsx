import { Link } from "react-router"

export const Navbar=()=>{
    return (<>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/privacy-policy"}>Privacy</Link>
        <br />
        <Link to={"/contact-us"}>Contact</Link>
        <br />
        <Link to={"/terms-of-service"}>Terms</Link>
        <br />
        <Link to={"/prompt-page"}>Prompt</Link>
    </>)
}