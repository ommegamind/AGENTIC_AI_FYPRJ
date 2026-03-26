export const addUser=async(newUser)=>{
    fetch("https://servercerbi.onrender.com/signin/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include",
        body:JSON.stringify(newUser)
    })
}

export const removeUser= async()=>{
    const removeResponse = await fetch("https://servercerbi.onrender.com/signin/logout/",{
        credentials: "include"
    });
    console.log(`response check ${removeResponse}`);
    return false;
}