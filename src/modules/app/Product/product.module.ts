import { Module } from '@nestjs/common'
import { ProductController } from './product.controller'
import { ProductService } from './Services/product.service'
import { ExceptionModule } from '../Exception/exception.module'

@Module({
  modules: [ExceptionModule],
  controllers: [ProductController],
  components: [ProductService],
  exports: [ProductService]
})

export class ProductModule {}
