import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function DELETE(request,{ params }) {
   const {productId} = params;
    console.log(`${params} this is param`)
    console.log(`${productId} this is manufacturer Id`)
    try {   
      await connectDb();
      const product = await prisma.product.delete({
        where: { id: Number(productId) },
      });
      const response = NextResponse.json(product, {
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