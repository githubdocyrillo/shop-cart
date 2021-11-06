import { Body, Controller, Get, Post, Response } from '@nestjs/common';
import { AppService } from './app.service';

class CreateProductDTO {
  product: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/shop-cart')
  getShopCart(): string {
    return this.appService.getShopCart();
  }

  @Post("/product")
  postProduct(@Body() CreateProductDTO: CreateProductDTO): void {
    this.appService.postProduct(CreateProductDTO.product);
  }
}
