import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("olive-branch"); // Hide db name later
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("messages").insertOne(bodyObject);
      res.json(newPost.ops[0]);
      break;
    case "GET":
      const oliveBranches = await db.collection("messages").find({}).toArray();
      res.json({ status: 200, data: oliveBranches });
      break;
  }
}
