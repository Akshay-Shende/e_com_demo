import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { manufacturerRepository } from "@/repositories/manufacturerRepository";

export async function POST(request) {
    const { ManufacturerName, ManufacturerDescription, ManuCity, ManuGrade, ManuCountry } = await request.json();
    try {   
      await connectDb();
      const manufacturer = await manufacturerRepository.create({ManufacturerName, ManufacturerDescription, ManuCity, ManuGrade, ManuCountry});

      const response = NextResponse.json(manufacturer, {
        status: 201,
      });
      return response;
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          message: "failed to create manufacturer !!",
          status: false,
        },
        {
          status: 500,
        }
      );
    }
  }

  export async function GET() {
    let manufacturers = [];
             try {
              await connectDb();
              manufacturers = await manufacturerRepository.getAll();
              
               const response = NextResponse.json(manufacturers, {
                status: 200,
              });
              return response;
             } catch (error) {
               console.log(error);
               return NextResponse.json({
                 message: "failed to get manufacturer",
                 success: false,
               },
               {
                status: 500,
              }
            );
             }
  }