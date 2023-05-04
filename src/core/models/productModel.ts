export interface IProduct {
  address: string;
  id: number;
}

export class ProductModel implements IProduct {
  constructor(public address: string, public id: number) {}
}
