import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body, UseFilters } from '@nestjs/common'
import { CustomForbiddenException } from '../../exception/forbidden.exception'
import { HttpExceptionFilter } from '../../exception/http-exception.filter'

@Controller()
@UseFilters(new HttpExceptionFilter())
export class ExceptionController {
  @Get('getException')
  async getException(@Request() req, @Response() res, @Next() next){
    throw new CustomForbiddenException()
  }
}

