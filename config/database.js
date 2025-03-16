import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((error) => {
      console.log("Connection Failed");
    });
};

export default connectDb;
