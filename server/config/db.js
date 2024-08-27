import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection successful to db");
    } catch (error) {
        console.error("Databse connection fail", error);
        process.exit(1);
    }
}

export default connectDB;