import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BanqueService } from './banque.service';
import * as client from 'src/generated/prisma/client';

@Controller('/api/banques')
export class BanqueController {
    constructor(private readonly banqueService: BanqueService){}

    @Get('')
    async findAll(){
        return this.banqueService.findAll({})
    }

    @Get('/:id')
    async find(@Param('id') id:string){
        return this.banqueService.find(parseInt(id))
    }

    @Post('')
    async create(@Body() data:client.Banque){
        return this.banqueService.create(data)
    }

    @Put('')
    async update(@Body() data: {_id: number, name: string}){
        return this.banqueService.update(data)
    }

    @Delete('/:id')
    async delete(@Param('id') id:string){
        return this.banqueService.delete(parseInt(id))
    }
}
