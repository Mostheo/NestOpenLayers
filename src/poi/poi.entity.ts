import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PoiEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    // ... Autres propriétés de l'entité POI
}