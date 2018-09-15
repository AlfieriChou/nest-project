import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './Services/user.service'
import { ProductModule } from '../Product/product.module'

@Module({
  modules: [ProductModule],
  controllers: [UserController],
  components: [UserService],
})
export class UserModule { }
