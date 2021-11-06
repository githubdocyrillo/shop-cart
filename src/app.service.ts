import { Injectable } from '@nestjs/common';
import { db } from './database/config';

@Injectable()
export class AppService {
  getShopCart(): string {
    return db.getData("/products");
  }

  postProduct(product: string): void {
    db.push('/products', [product], false);
  }
}
