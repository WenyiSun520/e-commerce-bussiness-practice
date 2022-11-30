import mongoose from "mongoose";
let models = {};
main();
async function main() {
  await mongoose.connect(
    "mongodb+srv://catowel:catowel@cluster0.wvq2pcq.mongodb.net/data?retryWrites=true&w=majority"
  );
  console.log("successfully connected to mongodb!");

  const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    petsTag: [String],
    price: Number,
    // avg_rating: Number,
    description: String,
    // img: {
    //     data: Buffer,
    //     contentType: String
    // }
  });

  models.Products = mongoose.model("Products", productSchema);

  const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    passwords: String,
  });
  models.Users = mongoose.model("Users", userSchema);
}

export default models;
