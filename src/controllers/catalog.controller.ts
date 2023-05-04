import { Request, Response } from 'express';
import CatalogSerivce from '../services/catalog.service';

const catalogService = new CatalogSerivce();

export default class CatalogController {
  public async getCatalogById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const catalog = await catalogService.getCatalogById(Number(id));
      if (!catalog) {
        return res.status(400).send({
          code: 400,
          success: false,
          message: 'Catalog not found',
        });
      }
      return res.status(200).send({
        code: 200,
        success: true,
        message: 'Got the catalog!',
        data: catalog,
      });
    } catch (err) {
      return res.status(500).send({
        code: 500,
        message: 'Unexpected error',
      });
    }
  }
}
