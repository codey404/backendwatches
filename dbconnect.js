import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function DBconnect() {
  try {
    let result = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to monogodb");
  } catch (error) {
    console.log(error.message);
  }
}

export default DBconnect;
