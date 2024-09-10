
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ApolloProviderWrapper from "./apolloprovider";
import { Analytics } from '@vercel/analytics/react';
import Header from "@/components/header";
import Footer from "@/components/footer";


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
        <link 
        rel="preload" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" />
        </head>
        <body className={inter.className}>
          <ApolloProviderWrapper>
            <Header />
            {children}
            <Footer />
          </ApolloProviderWrapper>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
