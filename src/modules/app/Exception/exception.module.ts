import { Module } from '@nestjs/common'
import { ExceptionController } from './exception.controller'

@Module({
  modules: [],
  controllers: [ExceptionController]
})
export class ExceptionModule { }
