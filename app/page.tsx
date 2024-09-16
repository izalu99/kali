'use client';

import Headline from "@/components/headline";
import Search from "@/components/search";
import WordOfTheDay from "@/components/wordOfTheDay";
import React from 'react';
export default function Home() {

  return (
    <main className="flex min-h-screen justify-between flex-col bg-transparent">
      <div className='flex flex-col items-center justify-center p-4'>
        <Headline />
        <div className='flex-grow mt-8 w-full'>
          <Search />
        </div>
        <div className="">
          <WordOfTheDay />
        </div>
      </div>
    </main>
  );
}
