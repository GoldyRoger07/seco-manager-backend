import { Departement } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DepartementService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Departement): Promise<any>;
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
