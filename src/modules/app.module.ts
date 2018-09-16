import { Module, RequestMethod, UseFilters } from '@nestjs/common'
import { UserModule } from './app/User/user.module'
import { LoggerMiddleware } from './middleware/logger.middleware'
import { NestModule, MiddlewareConsumer } from '@nestjs/common/interfaces'
import { HttpExceptionFilter } from './exception/http-exception.filter'

@Module({
  modules: [UserModule]
})
@UseFilters(new HttpExceptionFilter())
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes(
      { path: '/users', method: RequestMethod.ALL },
      { path: '/products', method: RequestMethod.ALL }
    )
  }
}
