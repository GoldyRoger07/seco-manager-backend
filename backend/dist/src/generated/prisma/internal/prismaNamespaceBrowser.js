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
exports.NullsOrder = exports.SortOrder = exports.PostScalarFieldEnum = exports.UserScalarFieldEnum = exports.TypeCongeScalarFieldEnum = exports.EtatCivilScalarFieldEnum = exports.PositionScalarFieldEnum = exports.BanqueScalarFieldEnum = exports.DepartementScalarFieldEnum = exports.EmployeeScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Employee: 'Employee',
    Departement: 'Departement',
    Banque: 'Banque',
    Position: 'Position',
    EtatCivil: 'EtatCivil',
    TypeConge: 'TypeConge',
    User: 'User',
    Post: 'Post'
};
exports.TransactionIsolationLevel = {
    Serializable: 'Serializable'
};
exports.EmployeeScalarFieldEnum = {
    id: 'id',
    idEmployee: 'idEmployee',
    nom: 'nom',
    prenom: 'prenom',
    dateNaissance: 'dateNaissance',
    dateEmbauche: 'dateEmbauche',
    nombreEnfant: 'nombreEnfant',
    sexe: 'sexe',
    adresse: 'adresse',
    nif: 'nif',
    telephone: 'telephone',
    salaire: 'salaire',
    departementId: 'departementId',
    positionId: 'positionId',
    typeCongeId: 'typeCongeId',
    etatCivilId: 'etatCivilId',
    banqueId: 'banqueId',
    numCompteBancaire: 'numCompteBancaire'
};
exports.DepartementScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.BanqueScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.PositionScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.EtatCivilScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.TypeCongeScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    name: 'name'
};
exports.PostScalarFieldEnum = {
    id: 'id',
    title: 'title',
    content: 'content',
    published: 'published',
    authorId: 'authorId'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map