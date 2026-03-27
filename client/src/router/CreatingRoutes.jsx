import{createBrowserRouter, RouterProvider} from "react-router"
import{HomePage}from "../components/pages/HomePage"
import{ContactUsPage}from "../components/pages/ContactUsPage"
import{PrivacyPolicyPage}from "../components/pages/PrivacyPolicyPage"
import{TermsOfServicePage}from "../components/pages/TermsOfServicePage"
import { NavbarPageLayout } from "../components/Navbar/NavbarPageLayout"
import { PromptPage } from "../components/PromptPage/PromptPage"
// import { SignInPage } from "../components/SignInPage"
import { cookieFetch } from "../controller/cookieFetchHandler"
// import { LoginBtn } from "../components/Navbar/LoginBtn"

let router=createBrowserRouter([
        {
            element: <NavbarPageLayout />,
            children:[
                {
                    path:"/",
                    Component:HomePage
                },
                {
                    path:"/contact-us",
                    Component:ContactUsPage
                },
                {
                    path:"/privacy-policy",
                    Component:PrivacyPolicyPage
                },
                {
                    path:"/terms-of-service",
                    Component:TermsOfServicePage
                },
                // {
                //     path:"/sign-in",
                //     Component:SignInPage
                // },
                // {
                //     path:"/login",
                //     Component:LoginBtn
                // }
            ]
        },{
            path:"/prompt-page",
            Component:PromptPage,
            loader:()=>{
                const access =cookieFetch();
                return access;
            }
        }
    ])

export const Routes=()=>{
    return <RouterProvider router={router}></RouterProvider>
}