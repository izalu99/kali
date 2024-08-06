"use client"

import Image from "next/image";
import Header from "./components/header";
import Headline from "./components/headline";

import { useState } from 'react';

export default function Home() {


  

  return (
    <main className="flex min-h-screen justify-between flex-col">
      
      <Header />
      <Headline />
    </main>
  );
}
