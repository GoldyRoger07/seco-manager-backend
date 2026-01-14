"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtatCivilController = void 0;
const common_1 = require("@nestjs/common");
const etat_civil_service_1 = require("./etat-civil.service");
let EtatCivilController = class EtatCivilController {
    etatCivilService;
    constructor(etatCivilService) {
        this.etatCivilService = etatCivilService;
    }
    async findAll() {
        return this.etatCivilService.findAll({});
    }
    async find(id) {
        return this.etatCivilService.find(id);
    }
    async create(data) {
        return this.etatCivilService.create(data);
    }
    async update(data) {
        return this.etatCivilService.update(data);
    }
    async delete(id) {
        return this.etatCivilService.delete(parseInt(id));
    }
};
exports.EtatCivilController = EtatCivilController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EtatCivilController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EtatCivilController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EtatCivilController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EtatCivilController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EtatCivilController.prototype, "delete", null);
exports.EtatCivilController = EtatCivilController = __decorate([
    (0, common_1.Controller)('/api/etat-civils'),
    __metadata("design:paramtypes", [etat_civil_service_1.EtatCivilService])
], EtatCivilController);
//# sourceMappingURL=etat-civil.controller.js.map