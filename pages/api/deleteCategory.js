import { connectToDatabase } from "../../lib/mongodb"
import { ObjectId } from 'mongodb'

export default async function deleteCategory(req, res) {
  try {
    const { db } = await connectToDatabase()
    const id = req.body
    if (!id) {
      res.status(404).send(false)
      return
    }
    await db.collection("categories").deleteOne({ _id: ObjectId(id) })
    res.status(200).send(true)
  } catch (error) {
    res.status(404).send(false)
  }
}
