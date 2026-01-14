import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatisticService {
    constructor(private prisma: PrismaService){}

    async getTablesCount() {
    const departements = await this.prisma.departement.count();
    const employees = await this.prisma.employee.count();
    const etatCivils = await this.prisma.etatCivil.count();
    const positions = await this.prisma.position.count();
    const typeConges = await this.prisma.typeConge.count();
    const banques = await this.prisma.banque.count();

    return {
      departements: departements,
      employees: employees,
      etatCivils: etatCivils,
      positions: positions,
      typeConges: typeConges,
      banques: banques
    };
  }
}
