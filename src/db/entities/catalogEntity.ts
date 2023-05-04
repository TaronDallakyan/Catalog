import { sequelize } from '../connect-db';
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { ICatalog } from '../../core/models/catalogModel';

class Catalog
  extends Model<InferAttributes<Catalog>, InferCreationAttributes<Catalog>>
  implements ICatalog
{
  id: number;
  name: string;
  description: string;
  url: string;
  cost1: number;
  cost2: number;
  cost3: number;
  req1: number;
  req2: number;
  req3: number;
  category: number;
}

Catalog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    cost1: {
      type: DataTypes.INTEGER,
    },
    cost2: {
      type: DataTypes.INTEGER,
    },
    cost3: {
      type: DataTypes.INTEGER,
    },
    req1: {
      type: DataTypes.INTEGER,
    },
    req2: {
      type: DataTypes.INTEGER,
    },
    req3: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'catalog',
    freezeTableName: true,
  },
);

export default Catalog;
