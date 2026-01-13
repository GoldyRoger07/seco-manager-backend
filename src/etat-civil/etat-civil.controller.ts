import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EtatCivilService } from './etat-civil.service';

@Controller('/api/etat-civils')
export class EtatCivilController {
    constructor(private readonly etatCivilService: EtatCivilService){}
        
            @Get('')
            async findAll(){
                return this.etatCivilService.findAll({})
            }
        
            @Get('/:id')
            async find(@Param('id') id:number){
                return this.etatCivilService.find(id)
            }
        
            @Post('')
            async create(@Body() data:{id:number, name: string}){
                return this.etatCivilService.create(data)
            }
        
            @Put('')
            async update(@Body() data: {_id: number, name: string}){
                return this.etatCivilService.update(data)
            }
        
            @Delete('/:id')
            async delete(@Param('id') id:string){
                return this.etatCivilService.delete(parseInt(id))
            }
    
}
