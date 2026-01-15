import { Injectable } from '@nestjs/common';
import { createCanvas, loadImage, registerFont } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';

registerFont(
  path.join(process.cwd(), 'assets/fonts/Inter_18pt-Bold.ttf'),
  { family: 'Inter Bold' }
);

@Injectable()
export class BadgesService {

    async generateBadge(data: any, file: Express.Multer.File) {
        const templatePath =  path.join(process.cwd(), 'templates', 'recto-id-card-4.png');
        const template = await loadImage(templatePath);

        const canvas = createCanvas(1011, 638); // format carte
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = "top"
        ctx.drawImage(template, 0, 0);

        // Texte
        ctx.font = 'bold 30px Arial';
        ctx.fillText(data.nom, 54, 239);
        ctx.font = 'bold 25px Arial';
        ctx.fillText(data.nif, 346, 354);
        ctx.fillText(data.groupeSanguin, 346, 404);
        ctx.font = 'bold 50.38px Arial';
        ctx.fillStyle = "#FFFFFF"; 
        ctx.fillText(data.id, 671, 530);

        // Photo
        console.log(file)
        const photo = await loadImage(file.buffer);
        console.log(photo)
        ctx.drawImage(photo, 668, 186, 300, 300);

        
        const outputPath = path.join(process.cwd(), 'output', `${data.id}.png`);
        fs.writeFileSync(outputPath, canvas.toBuffer('image/png'));
        const relativeOutputPath = `/files/output/${data.id}.png`
        console.log(relativeOutputPath)
        // return { file: relativeOutputPath };
        return canvas.toBuffer('image/png');
    }

}
