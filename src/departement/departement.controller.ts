import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DepartementService } from './departement.service';

@Controller('/api/departements')
export class DepartementController {
    constructor(private readonly departementService: DepartementService){}
    
        @Get('')
        async findAll(){
            return this.departementService.findAll({})
        }
    
        @Get('/:id')
        async find(@Param('id') id:number){
            return this.departementService.find(id)
        }
    
        @Post('')
        async create(@Body() data:{id:number, name: string}){
            return this.departementService.create(data)
        }
    
        @Put('')
        async update(@Body() data: {_id: number, name: string}){
            return this.departementService.update(data)
        }
    
        @Delete('/:id')
        async delete(@Param('id') id:string){
            return this.departementService.delete(parseInt(id))
        }
    
}
