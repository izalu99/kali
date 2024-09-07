
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ApolloProviderWrapper from "./apolloprovider";
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ["latin"] });

//export const metadata = {
//  title: "kkd",
//  description: "A dictionary made with Next.js",
//};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
    appearance={{
      elements: {
        footer: "hidden",
      },
    }}>
      <html lang="en">
        <body className={inter.className}>
          <ApolloProviderWrapper>
          {children}
          </ApolloProviderWrapper>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
