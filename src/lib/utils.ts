import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import clientPromise from "@/app/mongodb"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* Gets the active restaurants and their details.
(numVotes and totalVotes are excluded because they do not need to be displayed on the frontend). */
export async function getActiveRestaurants() {
  let client
  try {
    client = await clientPromise
    const db = client.db("miriamdash")

    const result = await db
      .collection("restaurants")
      .aggregate([
        {
          $match: {
            isActive: true
          }
        },
        {
          $project: {
            _id: 0,
            name: 1,
            categories: 1,
            starRating: 1,
            photoUrl: 1,
            yelpUrl: 1
          }
        }
      ])
      .toArray()

    return result
  } catch (error) {
    console.error("Error fetching active restaurants:", error)
    throw error
  }
}
