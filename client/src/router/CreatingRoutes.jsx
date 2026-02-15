import {createBrowserRouter, RouterProvider} from "react-router"
import{HomePage}from "../components/HomePage"
import{ContactUsPage}from "../components/ContactUsPage"
import{PrivacyPolicyPage}from "../components/PrivacyPolicyPage"
import{TermsOfServicePage}from "../components/TermsOfServicePage"

let router=createBrowserRouter([
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
        }
    ])

export const Routes=(children)=>{
    return <RouterProvider router={router}>{children}</RouterProvider>
}