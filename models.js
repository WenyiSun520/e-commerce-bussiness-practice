import mongoose from "mongoose";
let models = {};
main();
async function main() {
  await mongoose.connect(
    "mongodb+srv://catowel:catowel@cluster0.wvq2pcq.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("successfully connected to mongodb!");

  const productSchema = new mongoose.Schema({
      id: Number,
      name: String,
      short_tags: [String],
      price: Number,
      avg_rating: Number,
      description: String,
      img: {
          data: Buffer,
          contentType: String
      }
  })
  const userSchema = new mongoose.Schema({
      username: String,
      fav_product: [Number]
  })
}

export default models;
