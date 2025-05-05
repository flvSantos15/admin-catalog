import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from 'src/config/config.module';
import { DatabaseModule } from 'src/database/database.module';
import { CategoriesController } from './categories.controller';
import { CategoriesModule } from './categories.module';

describe('CategoriesController', () => {
  let controller: CategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        CategoriesModule
      ]
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
