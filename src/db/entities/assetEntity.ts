import { sequelize } from '../connect-db';
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { IAsset } from '../../core/models/assetModel';
import { ASSET_LEVEL, ASSET_TYPE } from '../../utils/constants';
import User from './userEntity';

class Asset
  extends Model<InferAttributes<Asset>, InferCreationAttributes<Asset>>
  implements IAsset
{
  id: number;
  type: ASSET_TYPE;
  level: ASSET_LEVEL;
  address: string;
}

Asset.init(
  {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.ENUM('1', '2', '3'),
    },
    level: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10'),
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'asset',
    freezeTableName: true,
  },
);

User.hasMany(Asset, {
  foreignKey: 'address',
});
Asset.belongsTo(User, {
  foreignKey: 'address',
});

export default Asset;
