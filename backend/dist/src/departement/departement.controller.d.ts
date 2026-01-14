import { DepartementService } from './departement.service';
export declare class DepartementController {
    private readonly departementService;
    constructor(departementService: DepartementService);
    findAll(): Promise<any[]>;
    find(id: string): Promise<any>;
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
