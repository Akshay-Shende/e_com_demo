"use client"
import { httpAxios } from "@/helper/httpHelpers";

const getRoles = async () =>{  
   const roles =   await httpAxios
   .get("/api/roles")
   .then((response) => response.data)
   .catch(error => error.response.data.message);

   console.log(roles);
   return roles
   
}
export default getRoles;
