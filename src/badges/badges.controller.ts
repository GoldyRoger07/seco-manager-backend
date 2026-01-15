import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { BadgesService } from './badges.service';

@Controller('badges')
export class BadgesController {

    constructor(private badgesService:BadgesService){}


    @Post('create')
    @UseInterceptors(FileInterceptor('photo'))
    async createBadge(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any
    ) {
        return this.badgesService.generateBadge(body, file);
    }

}
