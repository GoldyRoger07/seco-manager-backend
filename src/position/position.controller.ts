import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PositionService } from './position.service';

@Controller('/api/positions')
export class PositionController {
    constructor(private readonly positionService: PositionService){}
        
            @Get('')
            async findAll(){
                return this.positionService.findAll({})
            }
        
            @Get('/:id')
            async find(@Param('id') id:string){
                return this.positionService.find(parseInt(id))
            }
        
            @Post('')
            async create(@Body() data:{id:number, name: string}){
                return this.positionService.create(data)
            }
        
            @Put('')
            async update(@Body() data: {_id: number, name: string}){
                return this.positionService.update(data)
            }
        
            @Delete('/:id')
            async delete(@Param('id') id:string){
                return this.positionService.delete(parseInt(id))
            }
    
}
