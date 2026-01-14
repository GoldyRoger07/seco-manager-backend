import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Employee: "Employee";
    readonly Departement: "Departement";
    readonly Banque: "Banque";
    readonly Position: "Position";
    readonly EtatCivil: "EtatCivil";
    readonly TypeConge: "TypeConge";
    readonly User: "User";
    readonly Post: "Post";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const EmployeeScalarFieldEnum: {
    readonly id: "id";
    readonly idEmployee: "idEmployee";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly dateNaissance: "dateNaissance";
    readonly dateEmbauche: "dateEmbauche";
    readonly nombreEnfant: "nombreEnfant";
    readonly sexe: "sexe";
    readonly adresse: "adresse";
    readonly nif: "nif";
    readonly telephone: "telephone";
    readonly salaire: "salaire";
    readonly departementId: "departementId";
    readonly positionId: "positionId";
    readonly typeCongeId: "typeCongeId";
    readonly etatCivilId: "etatCivilId";
    readonly banqueId: "banqueId";
    readonly numCompteBancaire: "numCompteBancaire";
};
export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];
export declare const DepartementScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type DepartementScalarFieldEnum = (typeof DepartementScalarFieldEnum)[keyof typeof DepartementScalarFieldEnum];
export declare const BanqueScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type BanqueScalarFieldEnum = (typeof BanqueScalarFieldEnum)[keyof typeof BanqueScalarFieldEnum];
export declare const PositionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum];
export declare const EtatCivilScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type EtatCivilScalarFieldEnum = (typeof EtatCivilScalarFieldEnum)[keyof typeof EtatCivilScalarFieldEnum];
export declare const TypeCongeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type TypeCongeScalarFieldEnum = (typeof TypeCongeScalarFieldEnum)[keyof typeof TypeCongeScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const PostScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly content: "content";
    readonly published: "published";
    readonly authorId: "authorId";
};
export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
