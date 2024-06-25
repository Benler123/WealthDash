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
      <Header/>
      <ResturantCards />
    </main>
  )
}
