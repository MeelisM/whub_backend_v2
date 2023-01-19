import mongoose from 'mongoose';

async function connectDatabase(): Promise<void> {
    const dbUri = process.env.MONGO_URI as string;

    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(dbUri);
        console.log('[DATABASE]: Connected successfully');
    } catch (error) {
        console.log('[DATABASE]: Could not connect', error);
        process.exit(1);
    }
}

export default connectDatabase;
