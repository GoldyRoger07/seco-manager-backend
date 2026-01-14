import { TypeCongeService } from './type-conge.service';
export declare class TypeCongeController {
    private readonly typeCongeService;
    constructor(typeCongeService: TypeCongeService);
    findAll(): Promise<any[]>;
    find(id: string): Promise<any>;
    create(data: {
        id: number;
        name: string;
    }): Promise<any>;
    update(data: {
        id: number;
        name: string;
    }): Promise<any>;
    delete(id: string): Promise<any>;
}
