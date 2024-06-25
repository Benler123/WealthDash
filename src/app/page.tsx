"use client"
import Image from "next/image"
import CachedIcon from "@mui/icons-material/Cached"
import React, { useState } from "react"
import exp from "constants"
import ResturantCards from "./ResturantCards"
import ResturantCard from "./components/ResturantCard"
import Header from "./components/Header"
// import RestaurantCard from "@/components/RestaurantCard";

export default function Home() {
  const [expand, setExpand] = useState(false)
  return (
    <main className="min-h-screen bg-white">
      <div className="flex flex-col h-30 w-full">
        <div className="relative mx-auto h-20 w-80">
          <Image fill={true} src="/1.png" objectFit="cover" alt="logo"></Image>
        </div>
        <div className="relative mx-auto w-80 text-black">
          Week of:{" "}
        </div>
      </div>
      <ResturantCards />
    </main>
  )
}
