import { connectToDatabase } from '../config/database.js';

export const Car = {
  async findAll(filters = {}) {
    const db = await connectToDatabase();
    return db.collection('cars').find(filters).sort({ price_per_day: 1 }).toArray();
  }
};
