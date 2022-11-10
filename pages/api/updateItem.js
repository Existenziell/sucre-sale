import { connectToDatabase } from "../../lib/mongodb"
import { ObjectId } from 'mongodb'

export default async function updateItem(req, res) {
  try {
    const { db } = await connectToDatabase()
    const { id, en, es, category } = req.body
    if (!id || !en || !es || !category) {
      res.status(404).send(false)
      return
    }
    await db.collection("items").updateOne({ _id: ObjectId(id) }, { $set: { en: en, es: es, category: category } })
    res.status(200).send(true)
  } catch (error) {
    res.status(404).send(false)
  }
}
