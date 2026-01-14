import { EmployeeService } from './employee.service';
import * as client from 'src/generated/prisma/client';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    findAll(): Promise<any[]>;
    find(id: string): Promise<any>;
    create(data: client.Employee): Promise<any>;
    update(data: {
        _id: number;
        name: string;
    }): Promise<any>;
    delete(id: string): Promise<any>;
}
