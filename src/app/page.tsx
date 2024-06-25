"use client";
import Image from "next/image";
import ResturantCards from "./ResturantCards";
import ResturantCard from "./components/ResturantCard";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row h-24 w-full justify-between">
        <div className="text-white w-full mt-[5em]"><h1 className="text-center">MIRIAM DASH</h1></div>
      </div>
      <ResturantCards/>

    </main>
  );
}
