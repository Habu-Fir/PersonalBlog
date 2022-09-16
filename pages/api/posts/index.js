import data from "../data";

function handler(req, res) {
  const { Post } = data;
  if (Post) return res.status(200).json(Post);
  console.log(Post);
  return res.status(404).json({ error: "Post not found" });
}

export default handler;
