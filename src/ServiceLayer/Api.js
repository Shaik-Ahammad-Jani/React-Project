// import { apikey,apiurl } from "./ApiLink"
// export const api = async () =>{
//     const responce = await fetch(`${apiurl}?key=${apikey}`, {
//         method:"POST",
//         headers:{"Content-type":"application/json"},
//         body:JSON.stringify({

//             contents:[
//                 {
//                     parts:[
//                         {text:query}
//                     ]
//                 }
//             ]
//         })

//     } );
//     return responce.json()
// }
import axios from "axios";
import { LANGUAGE_VERSIONS } from "./ApiLink";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};