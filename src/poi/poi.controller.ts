import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PointOfInterest } from './point-of-interest.entity';
import { PoiService } from './poi.service';
import { PoiEntity } from './poi.entity';

// Méthode CRUD

@Controller('api/poi')
export class PoiController {
  constructor(private readonly poiService: PoiService) {}

  @Post()
  create(@Body() poiData: PointOfInterest): Promise<PointOfInterest> {
    return this.poiService.create(poiData);
  }

  @Get()
  findAll(): Promise<PointOfInterest[]> {
    return this.poiService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PointOfInterest | undefined> {
    return await this.poiService.findOneById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() poi: PoiEntity): Promise<PoiEntity> {
    return await this.poiService.update(id, poi);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.poiService.delete(id);
  }
  
}
