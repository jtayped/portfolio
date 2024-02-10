import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json("This is a test");
}
