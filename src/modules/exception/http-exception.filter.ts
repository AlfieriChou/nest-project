import { ExceptionFilter, Catch, HttpException } from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, response) {
    const status = exception.getStatus()
    const message = 'Exception Log Message'

    response.status(status).json({
      statusCode: status,
      message: message,
    })
  }
}
