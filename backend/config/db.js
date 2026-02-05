import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://deepaktiwarixyz8_db_user:deepak700@cluster0.d740t6i.mongodb.net/RESUMEBUILDER')
    .then(() => console.log("MongoDB connected successfully"));
    } 