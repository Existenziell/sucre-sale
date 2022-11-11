import { connectToDatabase } from "../../lib/mongodb"

async function createNote(req, res) {
  try {
    const { db } = await connectToDatabase()
    const data = req.body

    console.log(data);
    if (!data) {
      res.status(404).send(false)
      return
    }
    try {
      await db.collection("categories").insertOne({ ...data })
    } catch (e) {
      console.log(e)
    }
    res.status(200).send(true)
  } catch (error) {
    res.status(404).send(false)
  }
}

export default createNote
