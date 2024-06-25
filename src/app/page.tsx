"use client"
import Image from "next/image";
import CachedIcon from '@mui/icons-material/Cached';
import React, { useState } from 'react';
import exp from "constants";

export default function Home() {
  const [expand, setExpand] = useState(false);
  return (
    <main className="min-h-screen bg-white">
      <div className="flex flex-col h-40 w-full">
        <div className="relative mx-auto mt-5 h-24 w-80"><Image fill={true} src="/1.png" objectFit="cover" alt="logo"></Image></div>
        <div className="relative mx-auto h-[4em] w-80 text-black">Week of: </div>
      </div>
      <div className="flex flex-col justify-between h-[24em]">
        <div className="flex flex-row h-24 w-full justify-between">
          <div className={`transition ease-in-out w-24 bg-slate-600 ${expand && "translate-x-[88.5em] translate-y-[18em]"}`}></div>
          <div className={`transition ease-in-out w-24 bg-slate-600 ${expand && "translate-x-[70.8em] translate-y-[18em]"}`}></div>
          <div className={`transition ease-in-out w-24 bg-slate-600 ${expand && "translate-x-[53.1em] translate-y-[18em]"}`}></div>
          <div className={`transition ease-in-out w-24 bg-slate-600 ${expand && "translate-x-[35.4em] translate-y-[18em]"}`}></div>
          <div className={`transition ease-in-out w-24 bg-slate-600 ${expand && "translate-x-[17.7em] translate-y-[18em]"}`}></div>
          <div className="w-24 bg-indigo-500 text-5xl" onClick={() => setExpand(!expand)}><CachedIcon fontSize="inherit"/></div>
        </div>
        <div className="flex flex-row h-24 w-full justify-between">
          <div className={`transition ease-in-out w-24 bg-slate-600 ${expand && "translate-x-[88.5em]"}`}></div>
          <div className={`transition ease-in-out w-24 bg-slate-600 ${expand && "translate-x-[70.8em]"}`}></div>
          <div className={`transition ease-in-out w-24 bg-slate-600 ${expand && "translate-x-[53.1em]"}`}></div>
          <div className={`transition ease-in-out w-24 bg-slate-600 ${expand && "translate-x-[35.4em]"}`}></div>
          <div className={`transition ease-in-out w-24 bg-slate-600 ${expand && "translate-x-[17.7em]"}`}></div>
          <div className="w-24 bg-indigo-500"></div>
        </div>
      </div>
      
      
    </main>
  );
}
