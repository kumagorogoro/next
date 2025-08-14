import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://marustageooo:1912a1025B@cluster0.ituyud7.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Success:Connected to MongoDB");
  } catch {
    console.log("Failure:Unconnected to MongoDB ");
    throw new Error();
  }
};
export default connectDB;
