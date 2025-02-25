import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'carRental';

let mongodb;

export const connectToDatabase = async () => {
    if (!mongodb) {
        try {
            const client = await MongoClient.connect(url);
            mongodb = client.db(dbName);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Failed to connect to MongoDB', error);
            process.exit(1);
        }
    }
    return mongodb;
};
