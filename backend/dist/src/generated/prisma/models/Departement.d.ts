import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DepartementModel = runtime.Types.Result.DefaultSelection<Prisma.$DepartementPayload>;
export type AggregateDepartement = {
    _count: DepartementCountAggregateOutputType | null;
    _avg: DepartementAvgAggregateOutputType | null;
    _sum: DepartementSumAggregateOutputType | null;
    _min: DepartementMinAggregateOutputType | null;
    _max: DepartementMaxAggregateOutputType | null;
};
export type DepartementAvgAggregateOutputType = {
    id: number | null;
};
export type DepartementSumAggregateOutputType = {
    id: number | null;
};
export type DepartementMinAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type DepartementMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type DepartementCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type DepartementAvgAggregateInputType = {
    id?: true;
};
export type DepartementSumAggregateInputType = {
    id?: true;
};
export type DepartementMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type DepartementMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type DepartementCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type DepartementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartementWhereInput;
    orderBy?: Prisma.DepartementOrderByWithRelationInput | Prisma.DepartementOrderByWithRelationInput[];
    cursor?: Prisma.DepartementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DepartementCountAggregateInputType;
    _avg?: DepartementAvgAggregateInputType;
    _sum?: DepartementSumAggregateInputType;
    _min?: DepartementMinAggregateInputType;
    _max?: DepartementMaxAggregateInputType;
};
export type GetDepartementAggregateType<T extends DepartementAggregateArgs> = {
    [P in keyof T & keyof AggregateDepartement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDepartement[P]> : Prisma.GetScalarType<T[P], AggregateDepartement[P]>;
};
export type DepartementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartementWhereInput;
    orderBy?: Prisma.DepartementOrderByWithAggregationInput | Prisma.DepartementOrderByWithAggregationInput[];
    by: Prisma.DepartementScalarFieldEnum[] | Prisma.DepartementScalarFieldEnum;
    having?: Prisma.DepartementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepartementCountAggregateInputType | true;
    _avg?: DepartementAvgAggregateInputType;
    _sum?: DepartementSumAggregateInputType;
    _min?: DepartementMinAggregateInputType;
    _max?: DepartementMaxAggregateInputType;
};
export type DepartementGroupByOutputType = {
    id: number;
    name: string;
    _count: DepartementCountAggregateOutputType | null;
    _avg: DepartementAvgAggregateOutputType | null;
    _sum: DepartementSumAggregateOutputType | null;
    _min: DepartementMinAggregateOutputType | null;
    _max: DepartementMaxAggregateOutputType | null;
};
type GetDepartementGroupByPayload<T extends DepartementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DepartementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DepartementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DepartementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DepartementGroupByOutputType[P]>;
}>>;
export type DepartementWhereInput = {
    AND?: Prisma.DepartementWhereInput | Prisma.DepartementWhereInput[];
    OR?: Prisma.DepartementWhereInput[];
    NOT?: Prisma.DepartementWhereInput | Prisma.DepartementWhereInput[];
    id?: Prisma.IntFilter<"Departement"> | number;
    name?: Prisma.StringFilter<"Departement"> | string;
    employees?: Prisma.EmployeeListRelationFilter;
};
export type DepartementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    employees?: Prisma.EmployeeOrderByRelationAggregateInput;
};
export type DepartementWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DepartementWhereInput | Prisma.DepartementWhereInput[];
    OR?: Prisma.DepartementWhereInput[];
    NOT?: Prisma.DepartementWhereInput | Prisma.DepartementWhereInput[];
    name?: Prisma.StringFilter<"Departement"> | string;
    employees?: Prisma.EmployeeListRelationFilter;
}, "id">;
export type DepartementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.DepartementCountOrderByAggregateInput;
    _avg?: Prisma.DepartementAvgOrderByAggregateInput;
    _max?: Prisma.DepartementMaxOrderByAggregateInput;
    _min?: Prisma.DepartementMinOrderByAggregateInput;
    _sum?: Prisma.DepartementSumOrderByAggregateInput;
};
export type DepartementScalarWhereWithAggregatesInput = {
    AND?: Prisma.DepartementScalarWhereWithAggregatesInput | Prisma.DepartementScalarWhereWithAggregatesInput[];
    OR?: Prisma.DepartementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DepartementScalarWhereWithAggregatesInput | Prisma.DepartementScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Departement"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Departement"> | string;
};
export type DepartementCreateInput = {
    name: string;
    employees?: Prisma.EmployeeCreateNestedManyWithoutDepartementInput;
};
export type DepartementUncheckedCreateInput = {
    id?: number;
    name: string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutDepartementInput;
};
export type DepartementUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employees?: Prisma.EmployeeUpdateManyWithoutDepartementNestedInput;
};
export type DepartementUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutDepartementNestedInput;
};
export type DepartementCreateManyInput = {
    id?: number;
    name: string;
};
export type DepartementUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DepartementUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DepartementScalarRelationFilter = {
    is?: Prisma.DepartementWhereInput;
    isNot?: Prisma.DepartementWhereInput;
};
export type DepartementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type DepartementAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DepartementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type DepartementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type DepartementSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DepartementCreateNestedOneWithoutEmployeesInput = {
    create?: Prisma.XOR<Prisma.DepartementCreateWithoutEmployeesInput, Prisma.DepartementUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.DepartementCreateOrConnectWithoutEmployeesInput;
    connect?: Prisma.DepartementWhereUniqueInput;
};
export type DepartementUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.DepartementCreateWithoutEmployeesInput, Prisma.DepartementUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.DepartementCreateOrConnectWithoutEmployeesInput;
    upsert?: Prisma.DepartementUpsertWithoutEmployeesInput;
    connect?: Prisma.DepartementWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartementUpdateToOneWithWhereWithoutEmployeesInput, Prisma.DepartementUpdateWithoutEmployeesInput>, Prisma.DepartementUncheckedUpdateWithoutEmployeesInput>;
};
export type DepartementCreateWithoutEmployeesInput = {
    name: string;
};
export type DepartementUncheckedCreateWithoutEmployeesInput = {
    id?: number;
    name: string;
};
export type DepartementCreateOrConnectWithoutEmployeesInput = {
    where: Prisma.DepartementWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartementCreateWithoutEmployeesInput, Prisma.DepartementUncheckedCreateWithoutEmployeesInput>;
};
export type DepartementUpsertWithoutEmployeesInput = {
    update: Prisma.XOR<Prisma.DepartementUpdateWithoutEmployeesInput, Prisma.DepartementUncheckedUpdateWithoutEmployeesInput>;
    create: Prisma.XOR<Prisma.DepartementCreateWithoutEmployeesInput, Prisma.DepartementUncheckedCreateWithoutEmployeesInput>;
    where?: Prisma.DepartementWhereInput;
};
export type DepartementUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: Prisma.DepartementWhereInput;
    data: Prisma.XOR<Prisma.DepartementUpdateWithoutEmployeesInput, Prisma.DepartementUncheckedUpdateWithoutEmployeesInput>;
};
export type DepartementUpdateWithoutEmployeesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DepartementUncheckedUpdateWithoutEmployeesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DepartementCountOutputType = {
    employees: number;
};
export type DepartementCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | DepartementCountOutputTypeCountEmployeesArgs;
};
export type DepartementCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementCountOutputTypeSelect<ExtArgs> | null;
};
export type DepartementCountOutputTypeCountEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
export type DepartementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    employees?: boolean | Prisma.Departement$employeesArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartementCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["departement"]>;
export type DepartementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["departement"]>;
export type DepartementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["departement"]>;
export type DepartementSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type DepartementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["departement"]>;
export type DepartementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | Prisma.Departement$employeesArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartementCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DepartementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DepartementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DepartementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Departement";
    objects: {
        employees: Prisma.$EmployeePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
    }, ExtArgs["result"]["departement"]>;
    composites: {};
};
export type DepartementGetPayload<S extends boolean | null | undefined | DepartementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DepartementPayload, S>;
export type DepartementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DepartementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DepartementCountAggregateInputType | true;
};
export interface DepartementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Departement'];
        meta: {
            name: 'Departement';
        };
    };
    findUnique<T extends DepartementFindUniqueArgs>(args: Prisma.SelectSubset<T, DepartementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DepartementClient<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DepartementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DepartementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartementClient<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DepartementFindFirstArgs>(args?: Prisma.SelectSubset<T, DepartementFindFirstArgs<ExtArgs>>): Prisma.Prisma__DepartementClient<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DepartementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DepartementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartementClient<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DepartementFindManyArgs>(args?: Prisma.SelectSubset<T, DepartementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DepartementCreateArgs>(args: Prisma.SelectSubset<T, DepartementCreateArgs<ExtArgs>>): Prisma.Prisma__DepartementClient<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DepartementCreateManyArgs>(args?: Prisma.SelectSubset<T, DepartementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DepartementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DepartementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DepartementDeleteArgs>(args: Prisma.SelectSubset<T, DepartementDeleteArgs<ExtArgs>>): Prisma.Prisma__DepartementClient<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DepartementUpdateArgs>(args: Prisma.SelectSubset<T, DepartementUpdateArgs<ExtArgs>>): Prisma.Prisma__DepartementClient<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DepartementDeleteManyArgs>(args?: Prisma.SelectSubset<T, DepartementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DepartementUpdateManyArgs>(args: Prisma.SelectSubset<T, DepartementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DepartementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DepartementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DepartementUpsertArgs>(args: Prisma.SelectSubset<T, DepartementUpsertArgs<ExtArgs>>): Prisma.Prisma__DepartementClient<runtime.Types.Result.GetResult<Prisma.$DepartementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DepartementCountArgs>(args?: Prisma.Subset<T, DepartementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DepartementCountAggregateOutputType> : number>;
    aggregate<T extends DepartementAggregateArgs>(args: Prisma.Subset<T, DepartementAggregateArgs>): Prisma.PrismaPromise<GetDepartementAggregateType<T>>;
    groupBy<T extends DepartementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DepartementGroupByArgs['orderBy'];
    } : {
        orderBy?: DepartementGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DepartementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DepartementFieldRefs;
}
export interface Prisma__DepartementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employees<T extends Prisma.Departement$employeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Departement$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DepartementFieldRefs {
    readonly id: Prisma.FieldRef<"Departement", 'Int'>;
    readonly name: Prisma.FieldRef<"Departement", 'String'>;
}
export type DepartementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelect<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    include?: Prisma.DepartementInclude<ExtArgs> | null;
    where: Prisma.DepartementWhereUniqueInput;
};
export type DepartementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelect<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    include?: Prisma.DepartementInclude<ExtArgs> | null;
    where: Prisma.DepartementWhereUniqueInput;
};
export type DepartementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelect<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    include?: Prisma.DepartementInclude<ExtArgs> | null;
    where?: Prisma.DepartementWhereInput;
    orderBy?: Prisma.DepartementOrderByWithRelationInput | Prisma.DepartementOrderByWithRelationInput[];
    cursor?: Prisma.DepartementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartementScalarFieldEnum | Prisma.DepartementScalarFieldEnum[];
};
export type DepartementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelect<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    include?: Prisma.DepartementInclude<ExtArgs> | null;
    where?: Prisma.DepartementWhereInput;
    orderBy?: Prisma.DepartementOrderByWithRelationInput | Prisma.DepartementOrderByWithRelationInput[];
    cursor?: Prisma.DepartementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartementScalarFieldEnum | Prisma.DepartementScalarFieldEnum[];
};
export type DepartementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelect<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    include?: Prisma.DepartementInclude<ExtArgs> | null;
    where?: Prisma.DepartementWhereInput;
    orderBy?: Prisma.DepartementOrderByWithRelationInput | Prisma.DepartementOrderByWithRelationInput[];
    cursor?: Prisma.DepartementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartementScalarFieldEnum | Prisma.DepartementScalarFieldEnum[];
};
export type DepartementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelect<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    include?: Prisma.DepartementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartementCreateInput, Prisma.DepartementUncheckedCreateInput>;
};
export type DepartementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DepartementCreateManyInput | Prisma.DepartementCreateManyInput[];
};
export type DepartementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    data: Prisma.DepartementCreateManyInput | Prisma.DepartementCreateManyInput[];
};
export type DepartementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelect<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    include?: Prisma.DepartementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartementUpdateInput, Prisma.DepartementUncheckedUpdateInput>;
    where: Prisma.DepartementWhereUniqueInput;
};
export type DepartementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DepartementUpdateManyMutationInput, Prisma.DepartementUncheckedUpdateManyInput>;
    where?: Prisma.DepartementWhereInput;
    limit?: number;
};
export type DepartementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartementUpdateManyMutationInput, Prisma.DepartementUncheckedUpdateManyInput>;
    where?: Prisma.DepartementWhereInput;
    limit?: number;
};
export type DepartementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelect<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    include?: Prisma.DepartementInclude<ExtArgs> | null;
    where: Prisma.DepartementWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartementCreateInput, Prisma.DepartementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DepartementUpdateInput, Prisma.DepartementUncheckedUpdateInput>;
};
export type DepartementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelect<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    include?: Prisma.DepartementInclude<ExtArgs> | null;
    where: Prisma.DepartementWhereUniqueInput;
};
export type DepartementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartementWhereInput;
    limit?: number;
};
export type Departement$employeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type DepartementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartementSelect<ExtArgs> | null;
    omit?: Prisma.DepartementOmit<ExtArgs> | null;
    include?: Prisma.DepartementInclude<ExtArgs> | null;
};
export {};
