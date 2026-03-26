
export const cookieFetch=async()=>{
    const response= await fetch("https://servercerbi.onrender.com/cookies",{
        method:"GET",
        credentials: "include"
    })
    const responseData= await response.json();
    return responseData.access;
}