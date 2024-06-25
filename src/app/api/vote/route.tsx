import clientPromise from "@/app/mongodb"

/* Gets the 5 restaurants with the highest number of votes, in order. First element is most votes. */
export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("miriamdash")

    const result = await db
      .collection("restaurants")
      .aggregate([
        {
          $sort: {
            numVotes: -1
          }
        },
        {
          $limit: 5
        },
        {
          $project: {
            _id: 0,
            name: 1,
            numVotes: 1
          }
        }
      ])
      .toArray()

    return new Response(JSON.stringify(result), {
      status: 200,
      statusText: "Successfully got top 5 voted restaurants"
    })
  } catch (e) {
    console.error(e)
  }
}

/* Increments numVotes of the specified restaurants by 1 */
export async function POST(request: Request) {
  try {
    const { restaurantNames } = await request.json()
    const client = await clientPromise
    const db = client.db("miriamdash")
    const result = await db
      .collection("restaurants")
      .updateMany(
        { name: { $in: restaurantNames } },
        { $inc: { numVotes: 1, totalVotes: 1 } }
      )

    if (result.matchedCount === 0) {
      throw new Error(`No restaurants found for the provided IDs`)
    }

    return new Response("Successfully incremented votes", {
      status: 200,
      statusText: "Successfully incremented votes"
    })
  } catch (e) {
    console.error(e)
    return new Response("Server error processing the request.", {
      status: 500,
      statusText: "Server error processing the request."
    })
  }
}

/* Sets numVotes of all restaurants to 0 */
export async function DELETE() {
  try {
    const client = await clientPromise
    const db = client.db("miriamdash")
    await db.collection("restaurants").updateMany({}, { $set: { numVotes: 0 } })

    return new Response("Successfully deleted votes for all restaurants", {
      status: 200,
      statusText: "Successfully deleted votes for all restaurants"
    })
  } catch (e) {
    console.error(e)
    return new Response("Server error processing the request.", {
      status: 500,
      statusText: "Server error processing the request."
    })
  }
}
