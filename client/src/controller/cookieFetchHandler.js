
export const cookieFetch=async()=>{
    const response= await fetch("http://localhost:3000/cookies",{
        method:"GET",
        credentials: "include"
    })
    const responseData= await response.json();
    return responseData.access;
}