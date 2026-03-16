export const submitPrompt=async(promptText)=>{
        if(promptText!==""){

            try{
                const promptResponse= await fetch("http://localhost:3000/prompts", {
                    method: 'POST',
                    credentials: "include",
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({promptInput: promptText})
                });
                const response = await promptResponse.json();

                if(response.sendingStatus==200){
                    alert("mail sent!!");
                    // return 200 implement proper popup
                }else{
                    alert("server error! mail not sent!")
                    // return 400 implement proper popup
                }

            }catch(err){
                console.log(`AUTH CHECK ERR, PROMPTHANDLER.JS: ${err}`);
            }
            
        }else{
            return "enter a valid prompt";
        }
    }