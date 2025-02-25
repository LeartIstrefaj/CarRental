import express from 'express';
import { Car } from '../models/car.js';

const router = express.Router();

router.get('/rental-cars', async (req, res) => {
  try {
    const { year, color, steering_type, number_of_seats } = req.query;
    const filters = {};

    if (year) filters.year = parseInt(year);
    if (color) filters.color = color;
    if (steering_type) filters.steering_type = steering_type;
    if (number_of_seats) filters.number_of_seats = parseInt(number_of_seats);

    const cars = await Car.findAll(filters);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rental cars', error: error.message });
  }
});

export default router;
