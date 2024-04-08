"use client"

import Image from "next/image";
import Hamburger from "./components/hamburger";
import BlogName from "./components/blogname";
import Menu from "./components/menu";

import { useState } from 'react';

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="flex min-h-screen justify-between flex-col p-24">
      <div className="flex flex-row justify-between">
        <div className="p-4"><BlogName /></div>
        <div className="p-4" onClick={handleHamburgerClick}><Hamburger /></div>
      </div>
      <div className="p-4">
        {isMenuOpen && 
        <div className="absolute right-0 top-10 mt-2">
          <Menu />
        </div>
        }
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
