import { Controller, Get } from '@nestjs/common';
import { StatisticService } from './statistic.service';

@Controller('/api/stats')
export class StatisticController {
    constructor(private statisticService: StatisticService){}

    @Get('')
    async getCounts(){
        return this.statisticService.getTablesCount()
    }
    
}
