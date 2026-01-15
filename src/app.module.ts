import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DepartementService } from './departement/departement.service';
import { BanqueService } from './banque/banque.service';
import { PositionService } from './position/position.service';
import { EtatCivilService } from './etat-civil/etat-civil.service';
import { TypeCongeService } from './type-conge/type-conge.service';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';
import { DepartementController } from './departement/departement.controller';
import { BanqueController } from './banque/banque.controller';
import { PositionController } from './position/position.controller';
import { EtatCivilController } from './etat-civil/etat-civil.controller';
import { TypeCongeController } from './type-conge/type-conge.controller';
import { StatisticService } from './statistic/statistic.service';
import { StatisticController } from './statistic/statistic.controller';
import { BadgesController } from './badges/badges.controller';
import { BadgesService } from './badges/badges.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'output'),
      serveRoot: '/files/output',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'client'),
      
    }),
    
  ],
  controllers: [AppController, EmployeeController, DepartementController, BanqueController, PositionController, EtatCivilController, TypeCongeController, StatisticController, BadgesController],
  providers: [AppService, PrismaService, UserService, PostService, DepartementService, BanqueService, PositionService, EtatCivilService, TypeCongeService, EmployeeService, StatisticService, BadgesService],
})
export class AppModule {}
