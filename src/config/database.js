// import { MongoClient } from 'mongodb';

// const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
// const dbName = 'carRental';

// let mongodb;

// export const connectToDatabase = async () => {
//   if (!mongodb) {
//     try {
//       const client = await MongoClient.connect(url);
//       mongodb = client.db(dbName);
//       console.log('Connected to MongoDB');
//     } catch (error) {
//       console.error('Failed to connect to MongoDB', error);
//       process.exit(1);
//     }
//   }
//   return mongodb;
// };


import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const url = process.env.MONGODB_URI;
const dbName = 'carRental';

let client;
let mongodb;

export const connectToDatabase = async () => {
  if (!mongodb) {
    try {
      client = new MongoClient(url);
      await client.connect();
      mongodb = client.db(dbName);
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      process.exit(1);
    }
  }
  return mongodb;
};





// import { MongoClient } from 'mongodb';


// const url = process.env.MONGODB_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//     return client.db();
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//     process.exit(1);
//   }
// }

// export default connectToDatabase;