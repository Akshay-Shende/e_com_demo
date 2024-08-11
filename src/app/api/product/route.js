import { connectDb }         from "@/helper/db";
import { NextResponse }      from "next/server";
import { productRepository } from "@/repositories/productRepository";

export async function GET() {
  let products = [];
  try {
    await connectDb();
          products = await productRepository.getAll();
    const response = NextResponse.json(products, {
      status: 200,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get products",
      success: false,
    });
  }
}

export async function POST(request) {
  const { productName,
    productDescription,
    productFeature,
    productSize,
    productUnit,
    productInventoryLevel,
    productUnitPrice,
    productPriceCurrency,
    productInventoryThreshold,
    productImageUrl,
    manuId } = await request.json();
  try {
    await connectDb();
    const product = await productRepository.create({ 
        productName,
        productDescription,
        productFeature,
        productSize,
        productUnit,
        productInventoryLevel,
        productUnitPrice,
        productPriceCurrency,
        productInventoryThreshold,
        productImageUrl,
        manuId });

    const response = NextResponse.json(product, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create product !!",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}


