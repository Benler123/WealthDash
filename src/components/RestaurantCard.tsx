import Image from "next/image";

export default function RestaurantCard() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-row h-24 w-full justify-between">
        <div className="text-white w-full mt-[5em]"><h1 className="text-center">MIRIAM DASH</h1></div>
      </div>
      <div className="flex h-[40em] flex-col items-center justify-between p-24"><div className="flex flex-row h-24 w-full justify-between">
        <div className="w-24 bg-slate-600"></div>
        <div className="w-24 bg-slate-600"></div>
        <div className="w-24 bg-slate-600"></div>
        <div className="w-24 bg-slate-600"></div>
        <div className="w-24 bg-slate-600"></div>
        <div className="w-24 bg-indigo-500"></div>
      </div>
      <div className="flex flex-row h-24 w-full justify-between">
      <div className="w-24 bg-slate-600"></div>
        <div className="w-24 bg-slate-600"></div>
        <div className="w-24 bg-slate-600"></div>
        <div className="w-24 bg-slate-600"></div>
        <div className="w-24 bg-slate-600"></div>
        <div className="w-24 bg-indigo-500"></div>
      </div></div>
      
    </main>
  );
}