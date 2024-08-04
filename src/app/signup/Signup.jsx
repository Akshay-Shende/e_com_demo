import React, { useState } from "react";
import { userRepository } from "@/repositories/userRepository";
import { toast } from "react-toastify";

const resetForm = () => {
  setUser({
    firstName: "",
    lastName: "",
    emailId: "",
    contactNumber: "",
    password: "",
    roleId: "",
  });
};

const Signup = () => {
  const [user,setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    contactNumber: "",
    password: "",
    roleId: "",
  });

  const signUpComponent = async (event) => {
    event.preventDefault();

    console.log(event);
    console.log(data);
    try {
      const createdUser = await userRepository.create(user);
      console.log(createdUser);

      toast.success("User is registered !!", {
        position: "top-center",
      });

      setUser({
        firstName: "",
        lastName: "",
        emailId: "",
        contactNumber: "",
        password: "",
        roleId: "",
      });
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      toast.error("Signup Error !! " + error.response.data.message, {
        position: "top-center",
      });
    }
  };
  return (
    <body class="bg-gray-100 flex items-center justify-center h-screen">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="firstName"
            >
              FirstName
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              name="firstName"
              onChange={(event) => {
                setUser({ ...user, firstName: event.target.value });
              }}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="lastName"
            >
              LastName
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              name="lastName"
              onChange={(event) => {
                setUser({ ...user, lastName: event.target.value });
              }}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              EmailId
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="emailId"
              onChange={(event) => {
                setUser({ ...user, emailId: event.target.value });
              }}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="contact-number"
            >
              Contact Number
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="contactNumber"
              onChange={(event) => {
                setUser({ ...user, contactNumber: event.target.value });
              }}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="role-id"
            >
              Role Id
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Select Role Id"
              name="roleId"
              onChange={(event) => {
                setUser({ ...user, roleId: event.target.value });
              }}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </body>
  );
};
export default Signup;
