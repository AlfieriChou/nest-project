import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body, UseFilters } from '@nestjs/common'
import { User } from './DTO/user.dto'
import { UserService } from './Services/user.service'

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  async getAllUsers( @Request() req, @Response() res, @Next() next) {
    try {
      const users = await this.userService.getAllUsers()
      res.status(HttpStatus.OK).json(users)
    } catch (error) {
      console.error(error)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get('users/:id')
  async getUser(@Response() res, @Param('id') id) {
    try {
      const user = await this.userService.getUser(+id)
      res.status(HttpStatus.OK).json(user)
    } catch (error) {
      console.error(error)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post('users')
  async createUser(@Request() req, @Response() res, @Body() User:User) {
    await this.userService.addUser(User).subscribe((users) => {
      res.status(HttpStatus.OK).json(users)
    })
  }
}
