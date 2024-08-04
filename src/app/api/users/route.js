import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { userRepository } from "@/repositories/userRepository";
import bcrypt from "bcryptjs";
  export async function POST(request) {

    const { firstName, lastName, emailId, contactNumber, password, roleId } = await request.json();
    try {   
      await connectDb();
 
      const passwordHashed = bcrypt.hashSync(
                password,
        parseInt(process.env.BCRYPT_SALT)
      );
      console.log(passwordHashed)
      const createdUser = await userRepository.create({firstName, lastName, emailId, contactNumber, password:passwordHashed, roleId});

      const response = NextResponse.json(createdUser, {
        status: 201,
      });
      return response;
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          message: "failed to create user !!",
          status: false,
        },
        {
          status: 500,
        }
      );
    }
  }

  export async function GET() {
  let users = [];
           try {
            await connectDb();
             users = await userRepository.getAll();
            console.log(users)
             const response = NextResponse.json(users, {
              status: 201,
            });
            return response;
           } catch (error) {
             console.log(error);
             return NextResponse.json({
               message: "failed to get users",
               success: false,
             });
           }
}