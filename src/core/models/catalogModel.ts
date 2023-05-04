export interface ICatalog {
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

export class CatalogModel implements ICatalog {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public url: string,
    public cost1: number,
    public cost2: number,
    public cost3: number,
    public req1: number,
    public req2: number,
    public req3: number,
    public category: number,
  ) {}
}
