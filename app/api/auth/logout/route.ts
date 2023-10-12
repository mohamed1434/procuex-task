import { COOKIE_NAME } from "@/constants";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

export async function POST(request: Request) {

  const secret = process.env.JWT_SECRET || "";

  const token = sign({}, secret, {
    expiresIn: 0, // Set expiresIn to 0 to effectively expire the token immediately
  });

  const serialized = serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1, // Set maxAge to -1 to delete the cookie
    path: "/",
  });

  const response = {
    message: "Logged Out",
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": serialized },
  });
}
