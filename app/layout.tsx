
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ApolloProviderWrapper from "./apolloprovider";
import { Analytics } from '@vercel/analytics/react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cursor from "@/components/cursor";
import { WordOTDProvider } from "@/app/context/wordOfTheDayContext";
import { Main } from "next/document";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kali",
  description: "A translation tool for learning kankanaey.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
    appearance={{
      elements: {
        footer: "hidden",
      },
    }}>
      <html lang="en">
        <head>
        </head>
        <body className={inter.className}>
          <Cursor />
          <ApolloProviderWrapper>
            <WordOTDProvider>
              <div className='min-h-screen flex flex-col'>
                <main className="flex-grow">
                  <Header />
                  {children}
                </main>
              </div>
              <Footer />
            </WordOTDProvider>
          </ApolloProviderWrapper>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
