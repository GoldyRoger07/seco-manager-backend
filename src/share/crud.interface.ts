export interface Crud{
    create(element: any): Promise<any>;

    find(id: number):Promise<any>
    
    findAll(params:{
        skip?: number;
        take?: number;
        cursor?: any;
        where?: any;
        orderBy?: any;
    }):Promise<any[]>

    update(element:any):Promise<any>

    delete(id:number):Promise<any>





}