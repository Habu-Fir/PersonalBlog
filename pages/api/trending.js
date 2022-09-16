import data from "./data";

const handler = (req, res) => {
  console.log("Found");
  const { Trending } = data;
  if (Trending) return res.status(200).json(Trending);
  return res.status(404).json({ error: "Data not found" });
};
export default handler;
