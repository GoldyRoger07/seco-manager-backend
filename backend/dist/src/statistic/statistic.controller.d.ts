import { StatisticService } from './statistic.service';
export declare class StatisticController {
    private statisticService;
    constructor(statisticService: StatisticService);
    getCounts(): Promise<{
        departements: number;
        employees: number;
        etatCivils: number;
        positions: number;
        typeConges: number;
        banques: number;
    }>;
}
