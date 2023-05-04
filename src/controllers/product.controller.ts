import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import UserService from '../services/user.service';
import CatalogSerivce from '../services/catalog.service';

const catalogService = new CatalogSerivce();
const productService = new ProductService();
const userService = new UserService();

export default class ProductController {
  public async buyProduct(req: Request, res: Response) {
    try {
      const user = await userService.getUser(req.body.address);
      if (!user) {
        return res.status(400).send({
          code: 400,
          success: false,
          message: 'User not found',
        });
      }

      const catalog = await catalogService.getCatalogById(req.body.id);

      if (!catalog) {
        return res.status(400).send({
          code: 400,
          success: false,
          message: 'Catalog not found',
        });
      }

      const sendNotAllowedResponse = (reason) => {
        return res.status(400).send({
          success: false,
          message: reason,
        });
      };
      const { cash1, cash2, cash3 } = user;
      const { cost1, cost2, cost3, req1, req2, req3 } = catalog;

      if (cash1 < cost1 || cash2 < cost2 || cash3 < cost3) {
        return sendNotAllowedResponse('User does not have enough cash');
      }

      const nonMatchingReq = [
        { reqId: 1, value: req1 },
        { reqId: 2, value: req2 },
        { reqId: 3, value: req3 },
      ].find((reqX) => {
        if (reqX.value === null) return false;
        const asset = user.assets.find(
          (asset) => Number(asset.type) === reqX.reqId,
        );
        if (!asset || Number(asset.level) > reqX.value) return true;
        return false;
      });

      if (nonMatchingReq) {
        return sendNotAllowedResponse(
          `User asset level does not match req${nonMatchingReq.reqId}`,
        );
      }

      await productService.createProduct(req.body);

      const resources = {
        cash1: cash1 - cost1,
        cash2: cash2 - cost2,
        cash3: cash3 - cost3,
      };

      await userService.updateUser(resources, user.address);
      return res.status(200).send({
        success: true,
        data: { resources },
      });
    } catch (err) {
      return res.status(500).send({
        code: 500,
        message: 'Unexpected error',
      });
    }
  }
}
