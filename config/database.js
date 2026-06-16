import mongoose from "mongoose";
import dns from "dns";

// Node.js c-ares cannot reach the router DNS (192.168.29.1:53) on this machine.
// Redirect all DNS queries to a public resolver before any mongoose connection.
dns.setServers(["8.8.8.8", "1.1.1.1"]);

let connected = false;

const connectDB = async() => {
    mongoose.set("strictQuery", true);

    if (connected) {
        console.log("Mongo DB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("Mongo DB connected...");
    } catch (error) {
        console.log("MongoDB Connection Error:");
        console.log(error)
    }
};

export default connectDB;