import mongoose from "mongoose";
import {MONGODB_URI} from './config.js';

export const connectDB = async () => {
        try {
            const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.name}`);
        }
        catch (err) {
            console.error('Error: ${error.message}');
            process.exit(1);
        }
    }


