import { Router } from 'express';
import CatalogController from '../controllers/catalog.controller';

const catalogController = new CatalogController();
const router = Router();

router.get('/catalog/:id', catalogController.getCatalogById);

export default router;
