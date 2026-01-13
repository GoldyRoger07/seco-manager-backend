import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
    constructor(private prisma: PrismaService) {}
        
        
            async create(data: Prisma.EmployeeCreateInput): Promise<any> {
                return this.prisma.employee.create({data})
            }
        
            async find(id: number): Promise<any> {
                return this.prisma.employee.findUnique({
                    where:{id: id}
                })
            }
        
            async findAll(params: { skip?: number; take?: number; cursor?: any; where?: any; orderBy?: any; }): Promise<any[]> {
               return this.prisma.employee.findMany()
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
