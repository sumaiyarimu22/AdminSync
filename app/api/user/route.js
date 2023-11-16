import { User } from "@/app/lib/models";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(process.env.MONGODB_URI);
  const data = await User.find();
  console.log(data);
  return NextResponse.json({ result: true });
}
