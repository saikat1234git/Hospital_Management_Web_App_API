import app from "./app.js";
import cloudinary from "cloudinary";

/*cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});*/
app.get("/", (req, res) => {
  res.json({ message: "Welcom To My Channel" });
});
app.listen(4000, () => {
  console.log(`Server listening at port ${4000}`);
});
