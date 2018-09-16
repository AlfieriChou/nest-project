import { Injectable, HttpException } from '@nestjs/common'
import { Observable, of } from 'rxjs'
import { User } from '../DTO/user.dto'

@Injectable()
export class UserService {
  private users = [
    { "id": 1, "name": "Michael", "age": 25 },
    { "id": 2, "name": "Mary", "age": 27 }
  ]
  getAllUsers() {
    return Promise.resolve(this.users)
  }
  getUser(id: number) {
    const user = this.users.find((user) => {
        return user.id === id
    })
    if (!user) {
        throw new HttpException("user not found", 404)
    }
    return Promise.resolve(user)
  }

  addUser(user: User): Observable<object[]> {
    this.users.push(user)
    return of(this.users)
  }
}