import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productController = new ProductController();
const router = Router();

router.post('/buyProduct', productController.buyProduct);

export default router;
