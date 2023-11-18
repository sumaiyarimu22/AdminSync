import { User } from "@/app/lib/models";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const fetchData = async () => {
  let data = [];

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    data = await User.find();
  } catch (error) {
    throw new Error("data fetch failed");
  }
  return data;
};

export async function GET(request) {
  const data = await fetchData();
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const filteredUser = data.filter((user) => {
    return user.username.toLowerCase().includes(query.toLocaleLowerCase());
  });
  return NextResponse.json(filteredUser);
}
