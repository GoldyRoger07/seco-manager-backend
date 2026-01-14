"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.2.0",
    "engineVersion": "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3",
    "activeProvider": "sqlite",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n}\n\nmodel Employee {\n  id                Int         @id @default(autoincrement())\n  idEmployee        String\n  nom               String\n  prenom            String\n  dateNaissance     DateTime\n  dateEmbauche      DateTime\n  nombreEnfant      Int\n  sexe              String\n  adresse           String\n  nif               String\n  telephone         String\n  salaire           Float\n  departementId     Int\n  departement       Departement @relation(fields: [departementId], references: [id])\n  positionId        Int\n  position          Position    @relation(fields: [positionId], references: [id])\n  typeCongeId       Int\n  typeConge         TypeConge   @relation(fields: [typeCongeId], references: [id])\n  etatCivilId       Int\n  etatCivil         EtatCivil   @relation(fields: [etatCivilId], references: [id])\n  banqueId          Int\n  banque            Banque      @relation(fields: [banqueId], references: [id])\n  numCompteBancaire String\n}\n\nmodel Departement {\n  id        Int        @id @default(autoincrement())\n  name      String\n  employees Employee[]\n}\n\nmodel Banque {\n  id        Int        @id @default(autoincrement())\n  name      String\n  employees Employee[]\n}\n\nmodel Position {\n  id        Int        @id @default(autoincrement())\n  name      String\n  employees Employee[]\n}\n\nmodel EtatCivil {\n  id        Int        @id @default(autoincrement())\n  name      String\n  employees Employee[]\n}\n\nmodel TypeConge {\n  id        Int        @id @default(autoincrement())\n  name      String\n  employees Employee[]\n}\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n  posts Post[]\n}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean? @default(false)\n  author    User?    @relation(fields: [authorId], references: [id])\n  authorId  Int?\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Employee\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"idEmployee\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nom\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"prenom\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateNaissance\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"dateEmbauche\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"nombreEnfant\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"sexe\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"adresse\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nif\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"telephone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"salaire\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"departementId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"departement\",\"kind\":\"object\",\"type\":\"Departement\",\"relationName\":\"DepartementToEmployee\"},{\"name\":\"positionId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"position\",\"kind\":\"object\",\"type\":\"Position\",\"relationName\":\"EmployeeToPosition\"},{\"name\":\"typeCongeId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"typeConge\",\"kind\":\"object\",\"type\":\"TypeConge\",\"relationName\":\"EmployeeToTypeConge\"},{\"name\":\"etatCivilId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"etatCivil\",\"kind\":\"object\",\"type\":\"EtatCivil\",\"relationName\":\"EmployeeToEtatCivil\"},{\"name\":\"banqueId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"banque\",\"kind\":\"object\",\"type\":\"Banque\",\"relationName\":\"BanqueToEmployee\"},{\"name\":\"numCompteBancaire\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Departement\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"employees\",\"kind\":\"object\",\"type\":\"Employee\",\"relationName\":\"DepartementToEmployee\"}],\"dbName\":null},\"Banque\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"employees\",\"kind\":\"object\",\"type\":\"Employee\",\"relationName\":\"BanqueToEmployee\"}],\"dbName\":null},\"Position\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"employees\",\"kind\":\"object\",\"type\":\"Employee\",\"relationName\":\"EmployeeToPosition\"}],\"dbName\":null},\"EtatCivil\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"employees\",\"kind\":\"object\",\"type\":\"Employee\",\"relationName\":\"EmployeeToEtatCivil\"}],\"dbName\":null},\"TypeConge\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"employees\",\"kind\":\"object\",\"type\":\"Employee\",\"relationName\":\"EmployeeToTypeConge\"}],\"dbName\":null},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"PostToUser\"}],\"dbName\":null},\"Post\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"published\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"author\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PostToUser\"},{\"name\":\"authorId\",\"kind\":\"scalar\",\"type\":\"Int\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.sqlite.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.sqlite.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map