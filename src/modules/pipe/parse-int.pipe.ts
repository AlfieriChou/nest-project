import { PipeTransform, Injectable, ArgumentMetadata, HttpStatus, HttpException } from '@nestjs/common'

@Injectable()
export class ParseIntPipe implements PipeTransform<string>{
  async transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10)
    if (isNaN(val)) {
      throw new HttpException('validate error', HttpStatus.BAD_REQUEST)
    }
    return val
  }
}
