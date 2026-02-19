export const addUser=async(newUser)=>{
    fetch("http://localhost:3000/signin/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newUser)
    })
}