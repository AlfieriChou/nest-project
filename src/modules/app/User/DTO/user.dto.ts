import { IsString, IsInt } from 'class-validator'
import { isString } from 'util';
export class User {
  @IsInt()
  readonly id: number
  @IsString()
  readonly name: string
  @IsInt()
  readonly age: number
}
