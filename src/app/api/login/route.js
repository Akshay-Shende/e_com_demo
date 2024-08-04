import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";
import { userRepository } from "@/repositories/userRepository";

export async function POST(request) {
  const { email, password } = await request.json();
console.log(email+" -- "+password)
  try {
    // 1.get user
    await connectDb();
    const user = await userRepository.getByEmailId({ email: email });
    if (user == null) {
      throw new Error("user not found !!");
    }

    // 2.password check
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Password not matched !!");
    }

    // 3. generate token

    const token = jwt.sign(
      {
        id: user.id,
        firstName: user.firstName,
        lastName : user.lastName,
        emailId  : user.emailId
      },
      process.env.JWT_KEY
    );

    // 4.create nextresponse-- cookie

    const response = NextResponse.json({
      message: "Login success !!",
      success: true,
      user: user,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
