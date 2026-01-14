import { PrismaService } from 'src/prisma/prisma.service';
export declare class StatisticService {
    private prisma;
    constructor(prisma: PrismaService);
    getTablesCount(): Promise<{
        departements: number;
        employees: number;
        etatCivils: number;
        positions: number;
        typeConges: number;
        banques: number;
    }>;
}
