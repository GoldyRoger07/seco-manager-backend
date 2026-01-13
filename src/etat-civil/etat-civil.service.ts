import { Injectable } from '@nestjs/common';
import { EtatCivil, Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EtatCivilService {
    constructor(private prisma: PrismaService) {}
        
        
            async create(data1: EtatCivil): Promise<any> {
                const {id,...data} = data1
                return this.prisma.etatCivil.create({data})
            }
        
            async find(id: number): Promise<any> {
                return this.prisma.etatCivil.findUnique({
                    where:{id: id}
                })
            }
        
            async findAll(params: { skip?: number; take?: number; cursor?: any; where?: any; orderBy?: any; }): Promise<any[]> {
               return this.prisma.etatCivil.findMany({include: {employees:true}})
            }

            async update(element: any): Promise<any> {
                return this.prisma.etatCivil.update({
                    where: {
                        id: element.id as number
                    },
                    data:element
                })
            }
            async delete(id: number): Promise<any> {
               return this.prisma.etatCivil.delete({
                where: {
                    id: id
                }
               })
            }
    
}
