import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PointOfInterest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('geometry', { spatialFeatureType: 'Point', srid: 4326 })
  location: string; // Exemple : 'POINT(2.12345 48.67890)'
}