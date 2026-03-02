export const submitPrompt=async(promptText)=>{
        if(promptText!==""){

            try{
                const authCheck= await fetch("http://localhost:3000/prompts", {
                    method: 'POST',
                    credentials: "include",
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({promptInput: promptText})
                });
            }catch(err){
                console.log(`AUTH CHECK ERR, PROMPTHANDLER.JS: ${err}`);
            }
            
        }else{
            return "enter a valid prompt";
        }
    }