import { Body, Controller, Get, Param, Post, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { BadgesService } from './badges.service';
import { join } from 'node:path';
import { createReadStream } from 'node:fs';

@Controller('/api/badges')
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



    // @Get('download/:filename')
    // downloadImage(@Param('filename') filename: string, @Res() res: Response) {
    //     const filePath = join(process.cwd(), 'output', filename);

    //     // res.download(filePath);
    //     const file = createReadStream(filePath);
        
    //     return new StreamableFile(file, {
    //         type: 'image/png',
    //         disposition: `attachment; filename="${filename}"`,
    //         // If you want to define the Content-Length value to another value instead of file's length:
    //         // length: 123,
    //     });
    // }


}
