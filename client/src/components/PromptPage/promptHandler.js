// export const submitPrompt=async(promptText)=>{
//         if(promptText!==""){
//             try{
//                 const promptResponse= await fetch("http://localhost:3000/prompts", {
//                     method: 'POST',
//                     credentials: "include",
//                     headers:{
//                         'Content-Type':'application/json',
//                     },
//                     body: JSON.stringify({promptInput: promptText})
//                 });
//                 const response = await promptResponse.json();

//                 if(response.sendingStatus==200){
//                     alert("mail sent!!");
//                     // return 200 implement proper popup
//                 }else{
//                     alert("server error! mail not sent!")
//                     // return 400 implement proper popup
//                 }

//             }catch(err){
//                 console.log(`AUTH CHECK ERR, PROMPTHANDLER.JS: ${err}`);
//             }
            
//         }else{
//             return "enter a valid prompt";
//         }
//     }

// export const sendMail=async(mailBody, mailReceiver)=>{
//     try{
//         const promptResponse= await fetch("http://localhost:3000/prompts/mail", {
//             method: 'POST',
//             credentials: "include",
//             headers:{
//                 'Content-Type':'application/json',
//             },
//             body: JSON.stringify({mailSendingBody: mailBody, mailSendingReceiver: mailReceiver})
//         });
//         const response = await promptResponse.json();

//         if(response.sendingStatus==200){
//             alert("mail sent!!");
//             // return 200 implement proper popup
//         }else{
//             alert("server error! mail not sent!")
//             // return 400 implement proper popup
//         }

//     }catch(err){
//         console.log(`AUTH CHECK ERR, PROMPTHANDLER.JS: ${err}`);
//     }
// }

//GENERATED CONTENT
export const submitPrompt = async (promptText) => {
  if (!promptText?.trim()) return null;

  try {
    const promptResponse = await fetch("https://servercerbi.onrender.com/prompts", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        promptInput: promptText
      })
    });

    if (!promptResponse.ok) {
      console.error("HTTP error:", promptResponse.status);
      return null;
    }

    const response = await promptResponse.json();
    // console.log("Prompt response:", response);

    if (response.sendingStatus === 200) {
      return response;
    }

    if (response.generationStatus) {
      console.error("Generation failed:", response);
      return null;
    }

    return null;

  } catch (err) {
    console.error(`submitPrompt error: ${err}`);
    return null;
  }
};


export const sendMail = async (mailBody, mailReceiver, mailSubject) => {
  try {
    const promptResponse = await fetch("https://servercerbi.onrender.com/prompts/mail", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mailSendingBody: mailBody,
        mailSendingReceiver: mailReceiver,
        mailSendingSubject: mailSubject
      }),
    });

    const response = await promptResponse.json();

    if (response.sendingStatus === 200) {
      return { ok: true };
    } else {
      throw new Error("Server returned non-200 status");
    }
  } catch (err) {
    console.error(`sendMail error: ${err}`);
    throw err; // re-throw so MailCard can catch it and show error state
  }
};