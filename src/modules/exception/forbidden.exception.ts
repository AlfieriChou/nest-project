import { HttpException } from "@nestjs/core/exceptions/http-exception"
import { HttpStatus } from "@nestjs/common"

export class CustomForbiddenException extends HttpException {
  constructor() {
    super('forbidden', HttpStatus.FORBIDDEN)
  }
}