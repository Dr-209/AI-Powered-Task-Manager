// const axios=require("axios")
// const {GoogleAuth}=require("google-auth-library")

// const getTaskSuggestion=async(inputText)=>{
//     console.log(inputText)
//     try{
//         const response=await axios.post(
//             "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent",
        
//         {
//             contents:[
//                 {
//                 parts:[
//                     {text:`Suggest task name for: ${inputText}`}
//                 ]
//             }
//         ]
//         },{
//             headers:{"Content-Type":"application/json"},
//                 params:{key:process.env.GOOGLE_PALM_API_KEY}
            
//         }
//     )
//     console.log("Response from Gemini", response)
// return response.data?.candidates?.slice(0,10)?.[0]?.content?.parts?.[0]?.text || "No Suggestiond"
//     // return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No suggestions"
//     }
//     catch(error){
// console.log("Error in API:",error?.response?.data || error.message);
// return "Error fetching in suggestions"
//     }
// }
// module.exports={getTaskSuggestion}

const axios = require("axios");

const getTaskSuggestion = async (inputText) => {
  console.log("Input:", inputText);
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",
      {
        contents: [
          {
            // parts: [{ text: `Suggest a task description for: ${inputText}` }],
            parts: [{ text: `Give 5 to 6 short, one-line task descriptions based on: "${inputText}". Keep them simple and clear. No extra explanation, just a bullet list.` }],

          },
        ],
      },
      {
        headers: { "Content-Type": "application/json" },
        params: { key: process.env.GOOGLE_PALM_API_KEY },
      }
    );

    console.log("Gemini API Response:", response.data);
    return (
      response.data?.candidates?.splice(0,10)?.[0]?.content?.parts?.[0]?.text ||
      "No suggestions"
    );
  } catch (error) {
    console.error("Error in Gemini API:", error?.response?.data || error.message);
    return "Error fetching suggestions";
  }
};

const getTaskPrediction = async (inputText) => {
  try {
    console.log("Get task prediction ", inputText);
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",
      {
        contents: [
          {
            // parts: [{ text: `Suggest a task description for: ${inputText}` }],
            parts: [{ text: `Give answer in 1 line only.How much time it will take me to complete this task in hours: ${inputText}` }],

          },
        ],
      },
      {
        headers: { "Content-Type": "application/json" },
        params: { key: process.env.GOOGLE_PALM_API_KEY },
      }
    );

    console.log("Gemini API Response:", response.data);
    return (
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No time suggestions"
    );
  } catch (error) {
    console.error("Error in Gemini API:", error?.response?.data || error.message);
    return "Error fetching suggestions";
  }
};

module.exports = { getTaskSuggestion ,getTaskPrediction};
