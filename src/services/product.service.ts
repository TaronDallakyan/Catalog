import Product from '../db/entities/productEntity';
import { ProductModel } from '../core/models/productModel';

export default class ProductService {
  public async createProduct(data: ProductModel): Promise<Product | void> {
    await Product.create(data);
  }
}
