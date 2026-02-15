import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const NavbarPageLayout=()=>{
    return (<>
        <Navbar />
        <Outlet />
    </>)
}