import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PointOfInterest } from './poi/point-of-interest.entity';
import { PoiModule } from './poi/poi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig'; // Config BDD



@Module({
  imports: [TypeOrmModule.forRoot(config), PoiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}