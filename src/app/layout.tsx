import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Provider } from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bbuddy.ai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(lexend.className, "antialiased min-h-screen")}>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <Provider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </Provider>
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
