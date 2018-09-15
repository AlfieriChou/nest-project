import { Module, RequestMethod } from '@nestjs/common'
import { UserModule } from './app/User/user.module'
import { LoggerMiddleware } from './Middleware/logger.middleware'
import { NestModule, MiddlewareConsumer } from '@nestjs/common/interfaces'

@Module({
  modules: [UserModule]
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes(
      { path: '/users', method: RequestMethod.ALL },
      { path: '/products', method: RequestMethod.ALL }
    )
  }
}
