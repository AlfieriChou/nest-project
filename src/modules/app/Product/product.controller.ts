import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body } from '@nestjs/common'
import { Product } from './DTO/product.dto'
import { ProductService } from './Services/product.service'

@Controller()
export class ProductController {

  constructor(private productService: ProductService) { }

  @Get('products')
  async getAllProducts( @Request() req, @Response() res, @Next() next) {
    try{
      const products = await this.productService.getAllProducts()
      res.status(HttpStatus.OK).json(products)
    } catch (error) {
      console.log('----->', error)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get('products/:id')
    async getProduct( @Response() res, @Param('id') id) {
      try {
        const product = await this.productService.getProduct(+id)
        res.status(HttpStatus.OK).json(product)
      } catch (error) {
        console.error('------->', error)
        res.status(HttpStatus.INTERNAL_SERVER_ERROR)
      }
  }

  @Post('products')
  async addUProduct( @Response() res, @Body() product: Product) {
    const products = await this.productService.addProduct(product)
    res.status(HttpStatus.OK).json(products)
  }
}