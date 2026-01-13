import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TypeCongeService } from './type-conge.service';

@Controller('/api/type-conges')
export class TypeCongeController {
    constructor(private readonly typeCongeService: TypeCongeService){}
        
            @Get('')
            async findAll(){
                return this.typeCongeService.findAll({})
            }
        
            @Get('/:id')
            async find(@Param('id') id:string){
                return this.typeCongeService.find(parseInt(id))
            }
        
            @Post('')
            async create(@Body() data:{id:number, name: string}){
                return this.typeCongeService.create(data)
            }
        
            @Put('')
            async update(@Body() data: {id: number, name: string}){
                return this.typeCongeService.update(data)
            }
        
            @Delete('/:id')
            async delete(@Param('id') id:string){
                return this.typeCongeService.delete(parseInt(id))
            }
    
}
