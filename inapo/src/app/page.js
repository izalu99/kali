import Image from "next/image";
import Hamburger from "./components/hamburger";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="flex flex-row justify-between">
        <div className="p-4"><h2>inapo</h2></div>
        <div className="p-4"><Hamburger /></div>
      </div>
      <div>
        <h1>
          Welcome, inapo is all about curiosity and discovery; with a little dose of nostalgia.
          This is a place for learning.
        </h1>
      </div>
    </main>
  );
}
