import { sequelize } from '../connect-db';
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { IUser } from '../../core/models/userModel';

class User
  extends Model<InferAttributes<User>, InferCreationAttributes<User>>
  implements IUser
{
  address: string;
  cash1: number;
  cash2: number;
  cash3: number;
}

User.init(
  {
    address: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    cash1: {
      type: DataTypes.FLOAT,
    },
    cash2: {
      type: DataTypes.FLOAT,
    },
    cash3: {
      type: DataTypes.FLOAT,
    },
  },
  {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
  },
);

export default User;
