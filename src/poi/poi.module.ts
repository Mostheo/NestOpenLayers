import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoiEntity } from './poi.entity'; 
import { PoiService } from './poi.service';
import { PoiController } from './poi.controller';
import { PointOfInterest } from './point-of-interest.entity';


@Module({
  imports: [TypeOrmModule.forFeature([PointOfInterest])],
  providers: [PoiService],
  controllers: [PoiController],
})
export class PoiModule {}