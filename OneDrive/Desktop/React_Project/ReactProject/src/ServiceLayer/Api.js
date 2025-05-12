
import axios from "axios";
import { LANGUAGE_VERSIONS } from "./ApiLink";

import { Register,Login,baseUrl } from "./ApiLink";

const GetRegisterData =  async (payload)=>{
  const response = await fetch(Register,payload)
  const data = await response.json()
  return data
}

const GetLoginData =  async (payload)=>{
  const response = await fetch(Login,payload)
  const data = await response.json()
  return data
}

export {GetRegisterData,GetLoginData}

export 

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