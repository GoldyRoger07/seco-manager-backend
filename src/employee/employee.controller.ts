import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import * as client from 'src/generated/prisma/client';

@Controller('/api/employees')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
        
            @Get('')
            async findAll(){
                return this.employeeService.findAll({})
            }
        
            @Get('/:id')
            async find(@Param('id') id:string){
                return this.employeeService.find(parseInt(id))
            }
        
            @Post('')
            async create(@Body() data:client.Employee){
                return this.employeeService.create(data)
            }
        
            @Put('')
            async update(@Body() data: {_id: number, name: string}){
                return this.employeeService.update(data)
            }
        
            @Delete('/:id')
            async delete(@Param('id') id:string){
                return this.employeeService.delete(parseInt(id))
            }
    
}
