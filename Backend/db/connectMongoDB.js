import mongoose from "mongoose";
import dotenv from "dotenv";
const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connection in MongoDB :', ${error.message}`);
  }
};

export default connectMongoDB;
