import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'dotenv/config';
import "./globals.css"
import { getActiveRestaurants } from "@/lib/utils"
import { DataProvider } from "@/app/DataContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WealthDash",
  description: "By The Wealthfront Interns of 2024"
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const restaurantData = await getActiveRestaurants()

  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider data={restaurantData}>{children}</DataProvider>
      </body>
    </html>
  )
}
