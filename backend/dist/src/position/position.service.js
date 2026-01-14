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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PositionService = class PositionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data1) {
        const { id, ...data } = data1;
        return this.prisma.position.create({ data: { name: data.name } });
    }
    async find(id) {
        return this.prisma.position.findUnique({
            where: { id: id }
        });
    }
    async findAll(params) {
        return this.prisma.position.findMany({ include: { employees: true } });
    }
    async update(element) {
        return this.prisma.position.update({
            where: {
                id: element.id
            },
            data: element
        });
    }
    async delete(id) {
        return this.prisma.position.delete({
            where: {
                id: id
            }
        });
    }
};
exports.PositionService = PositionService;
exports.PositionService = PositionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PositionService);
//# sourceMappingURL=position.service.js.map