import { BanqueService } from './banque.service';
import * as client from 'src/generated/prisma/client';
export declare class BanqueController {
    private readonly banqueService;
    constructor(banqueService: BanqueService);
    findAll(): Promise<any[]>;
    find(id: string): Promise<any>;
    create(data: client.Banque): Promise<any>;
    update(data: {
        _id: number;
        name: string;
    }): Promise<any>;
    delete(id: string): Promise<any>;
}
