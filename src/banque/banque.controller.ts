import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BanqueService } from './banque.service';

@Controller('/api/banques')
export class BanqueController {
    constructor(private readonly banqueService: BanqueService){}

    @Get('')
    async findAll(){
        return this.banqueService.findAll({})
    }

    @Get('/:id')
    async find(@Param('id') id:number){
        return this.banqueService.find(id)
    }

    @Post('')
    async create(@Body() data:{ name: string}){
        return this.banqueService.create(data)
    }

    @Put('')
    async update(@Body() data: {_id: number, name: string}){
        return this.banqueService.update(data)
    }

    @Delete('/:id')
    async delete(@Param('id') id:number){
        return this.banqueService.delete(id)
    }
}
