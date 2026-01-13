import { Injectable } from '@nestjs/common';
import { Employee, Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
    constructor(private prisma: PrismaService) {}
        
        
            async create(data1: any): Promise<any> {
                const {id,...data} = data1
                return this.prisma.employee.create({data})
            }
        
            async find(id: number): Promise<any> {
                return this.prisma.employee.findUnique({
                    where:{id: id}
                })
            }
        
            async findAll(params: { skip?: number; take?: number; cursor?: any; where?: any; orderBy?: any; }): Promise<any[]> {
               return this.prisma.employee.findMany({include:{position: true, typeConge: true, banque: true, etatCivil: true, departement: true}})
            }
            async update(element: any): Promise<any> {
                return this.prisma.employee.update({
                    where: {
                        id: element.id as number
                    },
                    data:element
                })
            }
            async delete(id: number): Promise<any> {
               return this.prisma.employee.delete({
                where: {
                    id: id
                }
               })
            }
    
}
