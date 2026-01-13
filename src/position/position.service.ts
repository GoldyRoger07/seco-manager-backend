import { Injectable } from '@nestjs/common';
import { Position, Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PositionService {
    constructor(private prisma: PrismaService) {}
        
        
            async create(data1: Position): Promise<any> {
                const {id,...data} = data1
                return this.prisma.position.create({data:{name:data.name}})
            }
        
            async find(id: number): Promise<any> {
                return this.prisma.position.findUnique({
                    where:{id: id}
                })
            }
        
            async findAll(params: { skip?: number; take?: number; cursor?: any; where?: any; orderBy?: any; }): Promise<any[]> {
               return this.prisma.position.findMany()
            }
            async update(element: any): Promise<any> {
                return this.prisma.position.update({
                    where: {
                        id: element.id as number
                    },
                    data:element
                })
            }
            async delete(id: number): Promise<any> {
               return this.prisma.position.delete({
                where: {
                    id: id
                }
               })
            }
    
}
