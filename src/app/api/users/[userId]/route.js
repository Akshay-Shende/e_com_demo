import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import { userRepository } from "@/repositories/userRepository";
export async function DELETE(request,{ params }) {
   const {userId} = params;
    console.log(params)
    try {   
      await connectDb();
      const createdUser = await prisma.user.delete({
        where: { id: Number(userId) },
      });

      console.log(createdUser)
      const response = NextResponse.json(createdUser, {
        status: 200,
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

export async function GET({params}) {
  
}