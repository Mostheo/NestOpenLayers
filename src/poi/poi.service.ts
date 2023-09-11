import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointOfInterest } from './point-of-interest.entity';
import { PoiEntity } from './poi.entity';

@Injectable()
export class PoiService {
  constructor(
    @InjectRepository(PointOfInterest)
    private readonly poiRepository: Repository<PointOfInterest>,
  ) {}

  async create(poiData: PointOfInterest): Promise<PointOfInterest> {
    const poi = this.poiRepository.create(poiData);
    return await this.poiRepository.save(poi);
  }

  async findAll(): Promise<PointOfInterest[]> {
    return await this.poiRepository.find();
  }

  async findOneById(id: string): Promise<PointOfInterest | undefined> {
    return this.poiRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  async findOne(id: string): Promise<PoiEntity | undefined> {
    return this.poiRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  async delete(id: string): Promise<void> {
    await this.poiRepository.delete(id);
  }

  async update(id: string, updateData: Partial<PoiEntity>): Promise<PoiEntity> {
    // Trouve le point d'intérêt par ID
    const existingPoi = await this.poiRepository.findOne({ where: { id: parseInt(id, 10) } });
  
    // Vérif si le point d'intérêt existe
    if (!existingPoi) {
      throw new Error('Point d\'intérêt non trouvé.');
    }
  
    // Applique un MAJ aux propriétés du point d'intérêt
    Object.assign(existingPoi, updateData);
  
    // Enregistre les modifdans la BDD
    return this.poiRepository.save(existingPoi);
  }
}
