import { connectToDatabase } from "../../lib/mongodb"
import { ObjectId } from 'mongodb'

export default async function updateCategory(req, res) {
  try {
    const { db } = await connectToDatabase()
    const { id, en, es } = req.body
    if (!id || !en || !es) {
      res.status(404).send(false)
      return
    }
    await db.collection("categories").updateOne({ _id: ObjectId(id) }, { $set: { en: en, es: es } })
    res.status(200).send(true)
  } catch (error) {
    res.status(404).send(false)
  }
}
