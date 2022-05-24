import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: { type: String, minlength: 3, maxlength: 20 },
  price: { type: Number, min: 1000, max: 10000000 },
  color: { type: String, maxlength: 10, minlength: 3 },
  // women: { type: String, minlength: 3, maxlength: 20 },
  // smartWatch: { type: String, maxlength: 20, minlength: 3 },
  inStock: { type: Boolean },
  images: { type: Array },
});

export default new mongoose.model("watch", Schema);
