export interface IUser {
  address: string;
  cash1: number;
  cash2: number;
  cash3: number;
}

export class UserModel implements IUser {
  constructor(
    public address: string,
    public cash1: number,
    public cash2: number,
    public cash3: number,
  ) {}
}
