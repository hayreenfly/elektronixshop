import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors'; // just helps to highlight the console for important things
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

import connectDB from './config/db.js';

// Import Routes
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running....');
});

//Connect routes
app.use('/api/products', productRoutes);

// Custom Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`.yellow
      .bold
  );
});
