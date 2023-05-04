import Catalog from '../db/entities/catalogEntity';

export default class CatalogSerivce {
  public async getCatalogById(id: number): Promise<Catalog | void> {
    return Catalog.findOne({ where: { id }, raw: true });
  }
}
