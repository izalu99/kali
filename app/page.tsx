"use client"

import Header from "@/components/header";
import Headline from "@/components/headline";
import Search from "@/components/search";
import Footer from "@/components/footer";
import React from 'react';
export default function Home() {

  return (
    <main className="flex min-h-screen justify-between flex-col bg-darkRed">
      <Header />
      <div className='flex flex-col items-center justify-center p-4'>
        <Headline />
        <div className='flex-grow mt-8 w-full'>
          <Search />
        </div>
      </div>
      <Footer />
    </main>
  );
}
