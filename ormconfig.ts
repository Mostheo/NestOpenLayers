import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres', // Type de la BDD
  host: 'localhost', // Adresse de la BDD
  port: 5432, // Port de la BDD
  username: 'votre_utilisateur',
  password: 'votre_mot_de_passe',
  database: 'votre_base_de_donnees',
  synchronize: true, // À utiliser uniquement en développement
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};

export default config;