import Asset from '../db/entities/assetEntity';
import User from '../db/entities/userEntity';

import { IUser } from '../core/models/userModel';
import { IAsset } from '../core/models/assetModel';

interface IUserWithAssets extends IUser {
  assets: IAsset[];
}

export default class UserService {
  public async getUser(address: string): Promise<IUserWithAssets | void> {
    const userResult = await User.findOne({
      include: [Asset],
      where: { address },
    });
    return userResult
      ? (userResult.get({ plain: true }) as unknown as IUserWithAssets)
      : undefined;
  }

  public async updateUser(
    resources: {
      cash1: number;
      cash2: number;
      cash3: number;
    },
    address: string,
  ): Promise<IUser | void> {
    await User.update({ ...resources }, { where: { address: address } });
  }
}
