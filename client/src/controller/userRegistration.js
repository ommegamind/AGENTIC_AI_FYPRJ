export const addUser=async(newUser)=>{
    fetch("http://localhost:3000/signin/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include",
        body:JSON.stringify(newUser)
    })
}

export const removeUser= async()=>{
    const removeResponse = await fetch("http://localhost:3000/signin/logout/",{
        credentials: "include"
    });
    console.log(`response check ${removeResponse}`);
    return false;
}