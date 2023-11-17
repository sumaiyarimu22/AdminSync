import { User } from "@/app/lib/models";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    data = await User.find();
  } catch (error) {
    throw new Error("data fetch failed");
  }

  return NextResponse.json(data);
}
