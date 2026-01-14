import { EtatCivilService } from './etat-civil.service';
export declare class EtatCivilController {
    private readonly etatCivilService;
    constructor(etatCivilService: EtatCivilService);
    findAll(): Promise<any[]>;
    find(id: number): Promise<any>;
    create(data: {
        id: number;
        name: string;
    }): Promise<any>;
    update(data: {
        _id: number;
        name: string;
    }): Promise<any>;
    delete(id: string): Promise<any>;
}
