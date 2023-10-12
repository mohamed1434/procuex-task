import { Inter } from "next/font/google";
import "../globals.css";
import { ToasterProvider } from "@/providers/toast-provider";

export const metadata = {
  title: "Login",
  description: "Login Page",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
