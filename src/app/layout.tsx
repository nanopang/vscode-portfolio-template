import ChakraProvider from "@/providers/chakra.provider";

import { Inter } from "next/font/google";
import Footer from "./footer";
import "./globals.css";
import Menu from "./menu";
import Tabs from "./tabs";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata = {
  title: "Nano Pang"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <div className="flex flex-col h-screen">
            <div className="flex flex-row h-full w-full">
              <Menu />
              <div className="bg-editor flex-1 flex flex-col">
                <Tabs />
                <div className="pl-6 mt-2">{children}</div>
              </div>
            </div>
            <Footer />
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
