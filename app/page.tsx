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
      <Headline />
      <Search />
      <Footer />
    </main>
  );
}
