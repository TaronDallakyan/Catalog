import { ASSET_LEVEL, ASSET_TYPE } from '../../utils/constants';

export interface IAsset {
  id: number;
  type: ASSET_TYPE;
  level: ASSET_LEVEL;
  address: string;
}

export class AssetModel implements IAsset {
  constructor(
    public id: number,
    public type: ASSET_TYPE,
    public level: ASSET_LEVEL,
    public address: string,
  ) {}
}
