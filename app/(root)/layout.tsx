import Sidenav from "@/components/Sidenav";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SidenavProvider, useSidenav } from "@/context/SideNavContext";
import TopBar from "@/components/TopBar";
import { TemplateProvider } from "@/context/TemplateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProcueX",
  description: "ProcueX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidenavProvider>
          <TemplateProvider>
            <main className="flex flex-row bg-gradient-to-b from-[#F7FCFF] p-6 md:p-0">
              <Sidenav />
              <section className="w-full min-h-screen flex-col items-center sm:px-2 md:w-[calc(100vw-16rem)]">
                {" "}
                <TopBar />
                {children}
              </section>
            </main>
          </TemplateProvider>
        </SidenavProvider>
      </body>
    </html>
  );
}
