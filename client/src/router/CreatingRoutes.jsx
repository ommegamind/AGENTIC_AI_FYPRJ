import{createBrowserRouter, RouterProvider} from "react-router"
import{HomePage}from "../components/HomePage"
import{ContactUsPage}from "../components/ContactUsPage"
import{PrivacyPolicyPage}from "../components/PrivacyPolicyPage"
import{TermsOfServicePage}from "../components/TermsOfServicePage"
import { NavbarPageLayout } from "../components/Navbar/NavbarPageLayout"
import { PromptPage } from "../components/PromptPage/PromptPage"
import { SignInPage } from "../components/SignInPage"
import { cookieFetch } from "../controller/cookieFetchHandler"

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
                {
                    path:"/sign-in",
                    Component:SignInPage
                }
            ]
        },{
            path:"prompt-page",
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