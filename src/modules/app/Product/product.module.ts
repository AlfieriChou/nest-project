import { Module } from '@nestjs/common'
import { ProductController } from './product.controller'
import { ProductService } from './Services/product.service'

@Module({
  controllers: [ProductController],
  components: [ProductService],
  exports: [ProductService]
})

export class ProductModule {}
