import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body } from '@nestjs/common'
import { User } from './DTO/user.dto'
import { UserService } from './Services/user.service'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers( @Request() req, @Response() res, @Next() next) {
    try {
      const users = await this.userService.getAllUsers()
      res.status(HttpStatus.OK).json(users)
    } catch (error) {
      console.error(error)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get('/:id')
  async getUser(@Response() res, @Param('id') id) {
    try {
      const user = await this.userService.getUser(+id)
      res.status(HttpStatus.OK).json(user)
    } catch (error) {
      console.error(error)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post('')
  async createUser(@Request() req, @Response() res, @Body() User:User) {
    await this.userService.addUser(User).subscribe((users) => {
      res.status(HttpStatus.OK).json(users)
    })
  }

}
