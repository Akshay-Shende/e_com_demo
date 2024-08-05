"use client";
import React, { useEffect, useState } from "react";
import signupUser from "@/frontendServices/userServices";
import getRoles from "@/frontendServices/roleServices";
import { toast } from "react-toastify";
const signup = () => {
  const [roles, setRoles] = useState([]);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    contactNumber: "",
    password: "",
    roleId: "",
  });

  useEffect(() => {
    const getRoleInUseEffect = async () => {
      const roles = await getRoles();

      setRoles(roles);
    };
    getRoleInUseEffect();
  }, []);
  const submitForm = async () => {
    try {
      const createdUser = await signupUser(data);
      console.log(createdUser);
      toast.success(`we are here`,{
        position : "top-center"
      })
     return;
  
    } catch (error) {  
        toast.error("Signup Error !! ", {
          position: "top-center",
        });  
        return;
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="firstName"
              type="text"
              placeholder="Your first name"
              onChange={(event) => {
                setData({
                  ...data,
                  firstName: event.target.value,
                });
              }}
              value={data.firstName}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="lastName"
              type="text"
              placeholder="Your last name"
              onChange={(event) => {
                setData({
                  ...data,
                  lastName: event.target.value,
                });
              }}
              value={data.lastName}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="emailId"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="emailId"
              type="email"
              placeholder="Your email"
              onChange={(event) => {
                setData({
                  ...data,
                  emailId: event.target.value,
                });
              }}
              value={data.emailId}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contactNumber"
            >
              Contact Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="contactNumber"
              type="text"
              placeholder="Your contact number"
              onChange={(event) => {
                setData({
                  ...data,
                  contactNumber: event.target.value,
                });
              }}
              value={data.contactNumber}
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
                setData({
                  ...data,
                  password: event.target.value,
                });
              }}
              value={data.password}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="roleId"
            >
              Role
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="roleId"
              type = "number"
              value={data.roleId}
              onChange={(event) => {
                setData({
                  ...data,
                  roleId: Number(event.target.value),
                });
              }}
            >
              <option value="" disabled selected>
                Select a role
              </option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.roleName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitForm}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
