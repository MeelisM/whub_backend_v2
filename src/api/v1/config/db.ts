import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectDatabase() {
    const dbUri = process.env.MONGO_URI as string;

    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(dbUri);
        console.log('[database]: Connected successfully');
    } catch (error) {
        console.log('[database]: Could not connect', error);
        process.exit(1);
    }
}

export default connectDatabase;
