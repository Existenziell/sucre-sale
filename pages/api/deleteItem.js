import { connectToDatabase } from "../../lib/mongodb"
import { ObjectId } from 'mongodb'

export default async function deleteItem(req, res) {
  try {
    const { db } = await connectToDatabase()
    const id = req.body
    console.log(id);
    if (!id) {
      res.status(404).send(false)
      return
    }
    await db.collection("items").deleteOne({ _id: ObjectId(id) })
    res.status(200).send(true)
  } catch (error) {
    res.status(404).send(false)
  }
}
