import { Injectable } from '@nestjs/common';
import { Prisma, TypeConge } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TypeCongeService {
    constructor(private prisma: PrismaService) {}
        
        
            async create(data1: TypeConge): Promise<any> {
                const {id,...data} = data1
                return this.prisma.typeConge.create({data})
            }
        
            async find(id: number): Promise<any> {
                return this.prisma.typeConge.findUnique({
                    where:{id: id}
                })
            }
        
            async findAll(params: { skip?: number; take?: number; cursor?: any; where?: any; orderBy?: any; }): Promise<any[]> {
               return this.prisma.typeConge.findMany()
            }
            async update(element: any): Promise<any> {
                return this.prisma.typeConge.update({
                    where: {
                        id: element.id as number
                    },
                    data:element
                })
            }
            async delete(id: number): Promise<any> {
               return this.prisma.typeConge.delete({
                where: {
                    id: id
                }
               })
            }
    
}
