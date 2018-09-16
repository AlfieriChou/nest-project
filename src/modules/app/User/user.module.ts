import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './Services/user.service'
import { ProductModule } from '../Product/product.module'

@Module({
  imports: [ProductModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
