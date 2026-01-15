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

        ctx.drawImage(template, 0, 0);

        // Texte
        ctx.font = '30px Arial';
        ctx.fillText(data.nom, 52.14, 242.88);
        ctx.font = '25px Arial';
        ctx.fillText(data.nif, 345.96, 348.88);
        ctx.fillText(data.groupeSanguin, 345.96, 398.88);
        ctx.font = '50.38px Arial';
        ctx.fillText(data.id, 675.12, 527.33);

        // Photo
        const photo = await loadImage(file.path);
        console.log(photo)
        ctx.drawImage(photo, 689.14, 198.09, 276, 276);

        
        const outputPath =path.join(process.cwd(), 'output', `${data.id}.png`);
        fs.writeFileSync(outputPath, canvas.toBuffer('image/png'));
        console.log(outputPath)
        return { file: outputPath };
    }

}
