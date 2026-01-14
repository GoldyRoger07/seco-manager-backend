import { PositionService } from './position.service';
export declare class PositionController {
    private readonly positionService;
    constructor(positionService: PositionService);
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
