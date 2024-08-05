"use client"
import { httpAxios } from "@/helper/httpHelpers";

 export const signupUser = async (user) =>{
   const createdUser =   await httpAxios
   .post("/api/users", user)
   .then((response) => response);

   
   return createdUser  
}
 
 export const loginUser = async (login) =>{
   const userData = await httpAxios
   .post("/api/login",login)
   .then((response)=> response.data);
   //.catch((error)=> error);
   
   return userData;
}

