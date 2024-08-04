import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { roleRepository } from "@/repositories/roleRepository";
export async function GET() {
    let roles = [];
             try {
              await connectDb();
               roles = await roleRepository.getAll();
               console.log('====================================');
               console.log(roles);
               console.log('====================================');
               const response = NextResponse.json(roles, {
                status: 200,
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

  export async function POST(request) {
    const { roleName, roleCode } = await request.json();
    try {   
      await connectDb();
      const roles = await roleRepository.create({roleName, roleCode});

      const response = NextResponse.json(roles, {
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