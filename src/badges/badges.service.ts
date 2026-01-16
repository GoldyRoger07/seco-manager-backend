import { Injectable } from '@nestjs/common';
import { createCanvas, Image, loadImage, registerFont } from 'canvas';
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
        // ctx.drawImage(photo, 668, 186, 300, 300);
        this.drawRoundedImage(ctx, photo, 668, 186, 300, 300, 15)

        
        const outputPath = path.join(process.cwd(), 'output', `${data.id}.png`);
        fs.writeFileSync(outputPath, canvas.toBuffer('image/png'));
        const relativeOutputPath = `http://localhost:3000/files/output/${data.id}.png`
        console.log(relativeOutputPath)
        return { file: relativeOutputPath };
        // return canvas.toBuffer('image/png');
    }

    drawRoundedImage(ctx: any, img: any, x:number, y:number, width:number, height:number, radius:number) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();

      ctx.clip(); // applique le masque

      this.drawImageCover(ctx,img,x,y,width,height)
      // ctx.drawImage(img, x, y, width, height);
    }

    drawImageCover(ctx: CanvasRenderingContext2D, img:any, x:number, y:number, w:number, h:number) {
      const imgRatio = img.width / img.height;
      const boxRatio = w / h;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > boxRatio) {
        // Image plus large → on coupe sur les côtés
        drawHeight = h;
        drawWidth = h * imgRatio;
        offsetX = (w - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Image plus haute → on coupe en haut/bas
        drawWidth = w;
        drawHeight = w / imgRatio;
        offsetX = 0;
        offsetY = (h - drawHeight) / 2;
      }

      ctx.drawImage(img, x + offsetX, y + offsetY, drawWidth, drawHeight);
    }



}
