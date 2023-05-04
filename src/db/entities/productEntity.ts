import { sequelize } from '../connect-db';
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { IProduct } from '../../core/models/productModel';
import User from './userEntity';

class Product
  extends Model<InferAttributes<Product>, InferCreationAttributes<Product>>
  implements IProduct
{
  address: string;
  id: number;
}

Product.init(
  {
    address: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'product',
    freezeTableName: true,
  },
);

User.hasMany(Product, {
  foreignKey: 'address',
});
Product.belongsTo(User, {
  foreignKey: 'address',
});

export default Product;
