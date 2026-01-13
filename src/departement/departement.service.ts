import { Injectable } from '@nestjs/common';
import { Departement, Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartementService {
    constructor(private prisma: PrismaService) {}
    
    
        async create(data: Departement): Promise<any> {
        
            return this.prisma.departement.create({data:{name: data.name}})
        }
    
        async find(id: number): Promise<any> {
            return this.prisma.departement.findUnique({
                where:{id: id}
            })
        }
    
        async findAll(params: { skip?: number; take?: number; cursor?: any; where?: any; orderBy?: any; }): Promise<any[]> {
           return this.prisma.departement.findMany({include:{employees: true}})
        }
        async update(element: any): Promise<any> {
            return this.prisma.departement.update({
                where: {
                    id: element.id as number
                },
                data:element
            })
        }
        async delete(id: number): Promise<any> {
            
           return this.prisma.departement.delete({
            where: {
                id: id
            }
           })
        }
    
}
