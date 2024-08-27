import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection successful to db");
    } catch (error) {
        console.error("Databse connection fail", error);
    }
}

export default connectDB;