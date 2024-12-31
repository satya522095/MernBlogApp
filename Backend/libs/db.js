import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/college", {
    
        });
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
    }
};

export default connectDB;
