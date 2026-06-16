import mongoose from "mongoose";

let connected = false;

const connectDB = async() => {
    mongoose.set("strictQuery", true);

    // if the database is connected already, do not connect again 
    if (connected) {
        console.log("Mongo DB is already connected");
        return;
    }

    try {
        mongoose.connect(process.env.MONGODB_URI);
        connected = true;

        console.log("Mongo DB connected...");
    } catch (error) {
        console.log(error)
    }
};

export default connectDB;