import { Injectable, HttpException } from '@nestjs/common'
import { Observable, of } from 'rxjs'
import { Product } from '../DTO/product.dto'

@Injectable()
export class ProductService {
  private products = [
    { "id": 1, "name": "Watch", "price": 1000 },
    { "id": 2, "name": "Phone", "price": 25000 }
  ]

  getAllProducts() {
    return Promise.resolve(this.products)
  }

  getProduct(id: number) {
    const product = this.products.find((product) => {
      return product.id === id
    })
    if (!product) {
      throw new HttpException("product not found", 404)
    }
    return Promise.resolve(product)
  }

  addProduct(product: Product): Observable<object[]> {
    this.products.push(product)
    return of(this.products)
  }
}
