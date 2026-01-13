import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Crud } from 'src/share/crud.interface';
import { Banque, Prisma } from 'src/generated/prisma/client';
import { BanqueModel } from 'src/generated/prisma/models';

@Injectable()
export class BanqueService {

    constructor(private prisma: PrismaService) {}


    async create(data1: BanqueModel): Promise<any> {
        const {id,...data} = data1
        return this.prisma.banque.create({data})
    }

    async find(id: number): Promise<any> {
        return this.prisma.banque.findUnique({
            where:{id: id}
        })
    }

    async findAll(params: { skip?: number; take?: number; cursor?: any; where?: any; orderBy?: any; }): Promise<any[]> {
       return this.prisma.banque.findMany({include:{employees:true}})
    }
    async update(element: any): Promise<any> {
        return this.prisma.user.update({
            where: {
                id: element.id as number
            },
            data:element
        })
    }
    async delete(id: number): Promise<any> {
       return this.prisma.banque.delete({
        where: {
            id: id
        }
       })
    }

    
}
