"use client"
import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect,useLayoutEffect } from "react";
import { getUser } from "@/utils";

// export const metadata = {
//   title: "Login",
//   description: "Login Page",
// };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { push } = useRouter();
  useLayoutEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (user) {
        push("/");
        return;
      }

    })();
  }, [push]);

  return (
    <html lang="en">
      <body>
        {/* <div className="flex justify-center items-center min-h-screen"> */}
          {children}
        {/* </div> */}
      </body>
    </html>
  );
}
