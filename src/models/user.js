import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../config/database.js';

export const User = {
  async create(userData) {
    const db = await connectToDatabase();
    const result = await db.collection('users').insertOne(userData);
    return result.insertedId;
  },

  async findByUsername(username) {
    const db = await connectToDatabase();
    return db.collection('users').findOne({ username });
  },

  async findById(id) {
    const db = await connectToDatabase();
    return db.collection('users').findOne({ _id: new ObjectId(id) });
  }
};
