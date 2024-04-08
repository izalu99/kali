"use client"

import Image from "next/image";
import HamburgerMenu from "./components/hamburgermenu";
import BlogName from "./components/blogname";

import { useState } from 'react';

export default function Home() {


  

  return (
    <main className="flex min-h-screen justify-between flex-col p-24">
      
      <div className="flex flex-row justify-between">
        <div className="p-4"><BlogName /></div>
        <div className=""><HamburgerMenu /></div>
      </div>
      
      <div className="">
        <h1 className="text-5xl">
          Welcome, inapo is all about curiosity and discovery; with a little dose of nostalgia.
          This is a place for learning.
        </h1>
      </div>
    </main>
  );
}
