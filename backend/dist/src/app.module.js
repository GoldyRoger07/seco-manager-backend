"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma/prisma.service");
const user_service_1 = require("./user/user.service");
const post_service_1 = require("./post/post.service");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const departement_service_1 = require("./departement/departement.service");
const banque_service_1 = require("./banque/banque.service");
const position_service_1 = require("./position/position.service");
const etat_civil_service_1 = require("./etat-civil/etat-civil.service");
const type_conge_service_1 = require("./type-conge/type-conge.service");
const employee_service_1 = require("./employee/employee.service");
const employee_controller_1 = require("./employee/employee.controller");
const departement_controller_1 = require("./departement/departement.controller");
const banque_controller_1 = require("./banque/banque.controller");
const position_controller_1 = require("./position/position.controller");
const etat_civil_controller_1 = require("./etat-civil/etat-civil.controller");
const type_conge_controller_1 = require("./type-conge/type-conge.controller");
const statistic_service_1 = require("./statistic/statistic.service");
const statistic_controller_1 = require("./statistic/statistic.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(process.cwd(), 'client'),
            })
        ],
        controllers: [app_controller_1.AppController, employee_controller_1.EmployeeController, departement_controller_1.DepartementController, banque_controller_1.BanqueController, position_controller_1.PositionController, etat_civil_controller_1.EtatCivilController, type_conge_controller_1.TypeCongeController, statistic_controller_1.StatisticController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, user_service_1.UserService, post_service_1.PostService, departement_service_1.DepartementService, banque_service_1.BanqueService, position_service_1.PositionService, etat_civil_service_1.EtatCivilService, type_conge_service_1.TypeCongeService, employee_service_1.EmployeeService, statistic_service_1.StatisticService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map