import { Injectable } from '@nestjs/common';
import {v4 as Uuidv4} from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products : Product[] = [];
  create(createProductDto: CreateProductDto) {
    const {name, description, price} = createProductDto;
    const newProduct = new Product(
      Uuidv4(),
      name,
      description || 'No description provided',
      price,
    );
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
