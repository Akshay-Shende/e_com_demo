import { loginUser } from '@/frontendServices/userServices'
import { toast } from "react-toastify";
import React, { useState } from 'react'

const LoginPage = () => {
    const [login,setLogin] = useState({
        email : "",
        password: ""
    })

    const loginUserData = async() =>{
        await new Promise((resolve)=> setTimeout(resolve,3000))
      const userData =  await loginUser(login);

      toast.success(userData.message,{
        position : "top-center"
      })
     return;
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="emailId"
            >
             Email Id
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="emailId"
              type="email"
              placeholder="Enter Your Email"
              onChange={(event) => {
                setLogin({
                  ...login,
                  email: event.target.value,
                });
              }}
              value={login.email}
            />
          </div>
         
         
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Your password"
              onChange={(event) => {
                setLogin({
                  ...login,
                  password: event.target.value,
                });
              }}
              value={login.password}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={loginUserData}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
