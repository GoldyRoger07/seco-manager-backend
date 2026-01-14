import { PrismaService } from 'src/prisma/prisma.service';
import { BanqueModel } from 'src/generated/prisma/models';
export declare class BanqueService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data1: BanqueModel): Promise<any>;
    find(id: number): Promise<any>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: any;
        where?: any;
        orderBy?: any;
    }): Promise<any[]>;
    update(element: any): Promise<any>;
    delete(id: number): Promise<any>;
}
