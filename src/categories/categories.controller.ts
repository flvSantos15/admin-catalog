import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor() {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return
  }

  @Get()
  findAll() {
    return
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return
  }
}
