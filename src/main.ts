import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './db/connect-db';
import productRoutes from './routes/product.api';
import catalogRoutes from './routes/catalog.api';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

sequelize
  .sync()
  .then(() => 'Connected to DB!')
  .catch((err) => console.log(err, 'DB ERROR!!!'));

app.use('/', catalogRoutes);
app.use('/', productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
