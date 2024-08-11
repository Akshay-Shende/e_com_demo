import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function DELETE(request,{ params }) {
   const {manufacturerId} = params;
    console.log(`${params} this is param`)
    console.log(`${manufacturerId} this is manufacturer Id`)
    try {   
      await connectDb();
      const manufacturer = await prisma.manufacturer.delete({
        where: { id: Number(manufacturerId) },
      });
      const response = NextResponse.json(manufacturer, {
        status: 200,
      });
      return response;
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          message: "failed to delete manufacturer !!",
          status: false,
        },
        {
          status: 500,
        }
      );
    }
  }

export async function GET(request,{params}) {
  
}