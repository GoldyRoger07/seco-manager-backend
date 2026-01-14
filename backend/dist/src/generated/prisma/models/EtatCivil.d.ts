import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EtatCivilModel = runtime.Types.Result.DefaultSelection<Prisma.$EtatCivilPayload>;
export type AggregateEtatCivil = {
    _count: EtatCivilCountAggregateOutputType | null;
    _avg: EtatCivilAvgAggregateOutputType | null;
    _sum: EtatCivilSumAggregateOutputType | null;
    _min: EtatCivilMinAggregateOutputType | null;
    _max: EtatCivilMaxAggregateOutputType | null;
};
export type EtatCivilAvgAggregateOutputType = {
    id: number | null;
};
export type EtatCivilSumAggregateOutputType = {
    id: number | null;
};
export type EtatCivilMinAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type EtatCivilMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type EtatCivilCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type EtatCivilAvgAggregateInputType = {
    id?: true;
};
export type EtatCivilSumAggregateInputType = {
    id?: true;
};
export type EtatCivilMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type EtatCivilMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type EtatCivilCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type EtatCivilAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EtatCivilWhereInput;
    orderBy?: Prisma.EtatCivilOrderByWithRelationInput | Prisma.EtatCivilOrderByWithRelationInput[];
    cursor?: Prisma.EtatCivilWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EtatCivilCountAggregateInputType;
    _avg?: EtatCivilAvgAggregateInputType;
    _sum?: EtatCivilSumAggregateInputType;
    _min?: EtatCivilMinAggregateInputType;
    _max?: EtatCivilMaxAggregateInputType;
};
export type GetEtatCivilAggregateType<T extends EtatCivilAggregateArgs> = {
    [P in keyof T & keyof AggregateEtatCivil]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEtatCivil[P]> : Prisma.GetScalarType<T[P], AggregateEtatCivil[P]>;
};
export type EtatCivilGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EtatCivilWhereInput;
    orderBy?: Prisma.EtatCivilOrderByWithAggregationInput | Prisma.EtatCivilOrderByWithAggregationInput[];
    by: Prisma.EtatCivilScalarFieldEnum[] | Prisma.EtatCivilScalarFieldEnum;
    having?: Prisma.EtatCivilScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EtatCivilCountAggregateInputType | true;
    _avg?: EtatCivilAvgAggregateInputType;
    _sum?: EtatCivilSumAggregateInputType;
    _min?: EtatCivilMinAggregateInputType;
    _max?: EtatCivilMaxAggregateInputType;
};
export type EtatCivilGroupByOutputType = {
    id: number;
    name: string;
    _count: EtatCivilCountAggregateOutputType | null;
    _avg: EtatCivilAvgAggregateOutputType | null;
    _sum: EtatCivilSumAggregateOutputType | null;
    _min: EtatCivilMinAggregateOutputType | null;
    _max: EtatCivilMaxAggregateOutputType | null;
};
type GetEtatCivilGroupByPayload<T extends EtatCivilGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EtatCivilGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EtatCivilGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EtatCivilGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EtatCivilGroupByOutputType[P]>;
}>>;
export type EtatCivilWhereInput = {
    AND?: Prisma.EtatCivilWhereInput | Prisma.EtatCivilWhereInput[];
    OR?: Prisma.EtatCivilWhereInput[];
    NOT?: Prisma.EtatCivilWhereInput | Prisma.EtatCivilWhereInput[];
    id?: Prisma.IntFilter<"EtatCivil"> | number;
    name?: Prisma.StringFilter<"EtatCivil"> | string;
    employees?: Prisma.EmployeeListRelationFilter;
};
export type EtatCivilOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    employees?: Prisma.EmployeeOrderByRelationAggregateInput;
};
export type EtatCivilWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.EtatCivilWhereInput | Prisma.EtatCivilWhereInput[];
    OR?: Prisma.EtatCivilWhereInput[];
    NOT?: Prisma.EtatCivilWhereInput | Prisma.EtatCivilWhereInput[];
    name?: Prisma.StringFilter<"EtatCivil"> | string;
    employees?: Prisma.EmployeeListRelationFilter;
}, "id">;
export type EtatCivilOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.EtatCivilCountOrderByAggregateInput;
    _avg?: Prisma.EtatCivilAvgOrderByAggregateInput;
    _max?: Prisma.EtatCivilMaxOrderByAggregateInput;
    _min?: Prisma.EtatCivilMinOrderByAggregateInput;
    _sum?: Prisma.EtatCivilSumOrderByAggregateInput;
};
export type EtatCivilScalarWhereWithAggregatesInput = {
    AND?: Prisma.EtatCivilScalarWhereWithAggregatesInput | Prisma.EtatCivilScalarWhereWithAggregatesInput[];
    OR?: Prisma.EtatCivilScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EtatCivilScalarWhereWithAggregatesInput | Prisma.EtatCivilScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"EtatCivil"> | number;
    name?: Prisma.StringWithAggregatesFilter<"EtatCivil"> | string;
};
export type EtatCivilCreateInput = {
    name: string;
    employees?: Prisma.EmployeeCreateNestedManyWithoutEtatCivilInput;
};
export type EtatCivilUncheckedCreateInput = {
    id?: number;
    name: string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutEtatCivilInput;
};
export type EtatCivilUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employees?: Prisma.EmployeeUpdateManyWithoutEtatCivilNestedInput;
};
export type EtatCivilUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutEtatCivilNestedInput;
};
export type EtatCivilCreateManyInput = {
    id?: number;
    name: string;
};
export type EtatCivilUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EtatCivilUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EtatCivilScalarRelationFilter = {
    is?: Prisma.EtatCivilWhereInput;
    isNot?: Prisma.EtatCivilWhereInput;
};
export type EtatCivilCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type EtatCivilAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EtatCivilMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type EtatCivilMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type EtatCivilSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EtatCivilCreateNestedOneWithoutEmployeesInput = {
    create?: Prisma.XOR<Prisma.EtatCivilCreateWithoutEmployeesInput, Prisma.EtatCivilUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.EtatCivilCreateOrConnectWithoutEmployeesInput;
    connect?: Prisma.EtatCivilWhereUniqueInput;
};
export type EtatCivilUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.EtatCivilCreateWithoutEmployeesInput, Prisma.EtatCivilUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.EtatCivilCreateOrConnectWithoutEmployeesInput;
    upsert?: Prisma.EtatCivilUpsertWithoutEmployeesInput;
    connect?: Prisma.EtatCivilWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EtatCivilUpdateToOneWithWhereWithoutEmployeesInput, Prisma.EtatCivilUpdateWithoutEmployeesInput>, Prisma.EtatCivilUncheckedUpdateWithoutEmployeesInput>;
};
export type EtatCivilCreateWithoutEmployeesInput = {
    name: string;
};
export type EtatCivilUncheckedCreateWithoutEmployeesInput = {
    id?: number;
    name: string;
};
export type EtatCivilCreateOrConnectWithoutEmployeesInput = {
    where: Prisma.EtatCivilWhereUniqueInput;
    create: Prisma.XOR<Prisma.EtatCivilCreateWithoutEmployeesInput, Prisma.EtatCivilUncheckedCreateWithoutEmployeesInput>;
};
export type EtatCivilUpsertWithoutEmployeesInput = {
    update: Prisma.XOR<Prisma.EtatCivilUpdateWithoutEmployeesInput, Prisma.EtatCivilUncheckedUpdateWithoutEmployeesInput>;
    create: Prisma.XOR<Prisma.EtatCivilCreateWithoutEmployeesInput, Prisma.EtatCivilUncheckedCreateWithoutEmployeesInput>;
    where?: Prisma.EtatCivilWhereInput;
};
export type EtatCivilUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: Prisma.EtatCivilWhereInput;
    data: Prisma.XOR<Prisma.EtatCivilUpdateWithoutEmployeesInput, Prisma.EtatCivilUncheckedUpdateWithoutEmployeesInput>;
};
export type EtatCivilUpdateWithoutEmployeesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EtatCivilUncheckedUpdateWithoutEmployeesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EtatCivilCountOutputType = {
    employees: number;
};
export type EtatCivilCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | EtatCivilCountOutputTypeCountEmployeesArgs;
};
export type EtatCivilCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilCountOutputTypeSelect<ExtArgs> | null;
};
export type EtatCivilCountOutputTypeCountEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
export type EtatCivilSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    employees?: boolean | Prisma.EtatCivil$employeesArgs<ExtArgs>;
    _count?: boolean | Prisma.EtatCivilCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["etatCivil"]>;
export type EtatCivilSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["etatCivil"]>;
export type EtatCivilSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["etatCivil"]>;
export type EtatCivilSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type EtatCivilOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["etatCivil"]>;
export type EtatCivilInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | Prisma.EtatCivil$employeesArgs<ExtArgs>;
    _count?: boolean | Prisma.EtatCivilCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EtatCivilIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EtatCivilIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EtatCivilPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EtatCivil";
    objects: {
        employees: Prisma.$EmployeePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
    }, ExtArgs["result"]["etatCivil"]>;
    composites: {};
};
export type EtatCivilGetPayload<S extends boolean | null | undefined | EtatCivilDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload, S>;
export type EtatCivilCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EtatCivilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EtatCivilCountAggregateInputType | true;
};
export interface EtatCivilDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EtatCivil'];
        meta: {
            name: 'EtatCivil';
        };
    };
    findUnique<T extends EtatCivilFindUniqueArgs>(args: Prisma.SelectSubset<T, EtatCivilFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EtatCivilClient<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EtatCivilFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EtatCivilFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EtatCivilClient<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EtatCivilFindFirstArgs>(args?: Prisma.SelectSubset<T, EtatCivilFindFirstArgs<ExtArgs>>): Prisma.Prisma__EtatCivilClient<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EtatCivilFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EtatCivilFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EtatCivilClient<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EtatCivilFindManyArgs>(args?: Prisma.SelectSubset<T, EtatCivilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EtatCivilCreateArgs>(args: Prisma.SelectSubset<T, EtatCivilCreateArgs<ExtArgs>>): Prisma.Prisma__EtatCivilClient<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EtatCivilCreateManyArgs>(args?: Prisma.SelectSubset<T, EtatCivilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EtatCivilCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EtatCivilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EtatCivilDeleteArgs>(args: Prisma.SelectSubset<T, EtatCivilDeleteArgs<ExtArgs>>): Prisma.Prisma__EtatCivilClient<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EtatCivilUpdateArgs>(args: Prisma.SelectSubset<T, EtatCivilUpdateArgs<ExtArgs>>): Prisma.Prisma__EtatCivilClient<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EtatCivilDeleteManyArgs>(args?: Prisma.SelectSubset<T, EtatCivilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EtatCivilUpdateManyArgs>(args: Prisma.SelectSubset<T, EtatCivilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EtatCivilUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EtatCivilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EtatCivilUpsertArgs>(args: Prisma.SelectSubset<T, EtatCivilUpsertArgs<ExtArgs>>): Prisma.Prisma__EtatCivilClient<runtime.Types.Result.GetResult<Prisma.$EtatCivilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EtatCivilCountArgs>(args?: Prisma.Subset<T, EtatCivilCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EtatCivilCountAggregateOutputType> : number>;
    aggregate<T extends EtatCivilAggregateArgs>(args: Prisma.Subset<T, EtatCivilAggregateArgs>): Prisma.PrismaPromise<GetEtatCivilAggregateType<T>>;
    groupBy<T extends EtatCivilGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EtatCivilGroupByArgs['orderBy'];
    } : {
        orderBy?: EtatCivilGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EtatCivilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtatCivilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EtatCivilFieldRefs;
}
export interface Prisma__EtatCivilClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employees<T extends Prisma.EtatCivil$employeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EtatCivil$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EtatCivilFieldRefs {
    readonly id: Prisma.FieldRef<"EtatCivil", 'Int'>;
    readonly name: Prisma.FieldRef<"EtatCivil", 'String'>;
}
export type EtatCivilFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelect<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    include?: Prisma.EtatCivilInclude<ExtArgs> | null;
    where: Prisma.EtatCivilWhereUniqueInput;
};
export type EtatCivilFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelect<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    include?: Prisma.EtatCivilInclude<ExtArgs> | null;
    where: Prisma.EtatCivilWhereUniqueInput;
};
export type EtatCivilFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelect<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    include?: Prisma.EtatCivilInclude<ExtArgs> | null;
    where?: Prisma.EtatCivilWhereInput;
    orderBy?: Prisma.EtatCivilOrderByWithRelationInput | Prisma.EtatCivilOrderByWithRelationInput[];
    cursor?: Prisma.EtatCivilWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EtatCivilScalarFieldEnum | Prisma.EtatCivilScalarFieldEnum[];
};
export type EtatCivilFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelect<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    include?: Prisma.EtatCivilInclude<ExtArgs> | null;
    where?: Prisma.EtatCivilWhereInput;
    orderBy?: Prisma.EtatCivilOrderByWithRelationInput | Prisma.EtatCivilOrderByWithRelationInput[];
    cursor?: Prisma.EtatCivilWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EtatCivilScalarFieldEnum | Prisma.EtatCivilScalarFieldEnum[];
};
export type EtatCivilFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelect<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    include?: Prisma.EtatCivilInclude<ExtArgs> | null;
    where?: Prisma.EtatCivilWhereInput;
    orderBy?: Prisma.EtatCivilOrderByWithRelationInput | Prisma.EtatCivilOrderByWithRelationInput[];
    cursor?: Prisma.EtatCivilWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EtatCivilScalarFieldEnum | Prisma.EtatCivilScalarFieldEnum[];
};
export type EtatCivilCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelect<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    include?: Prisma.EtatCivilInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EtatCivilCreateInput, Prisma.EtatCivilUncheckedCreateInput>;
};
export type EtatCivilCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EtatCivilCreateManyInput | Prisma.EtatCivilCreateManyInput[];
};
export type EtatCivilCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    data: Prisma.EtatCivilCreateManyInput | Prisma.EtatCivilCreateManyInput[];
};
export type EtatCivilUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelect<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    include?: Prisma.EtatCivilInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EtatCivilUpdateInput, Prisma.EtatCivilUncheckedUpdateInput>;
    where: Prisma.EtatCivilWhereUniqueInput;
};
export type EtatCivilUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EtatCivilUpdateManyMutationInput, Prisma.EtatCivilUncheckedUpdateManyInput>;
    where?: Prisma.EtatCivilWhereInput;
    limit?: number;
};
export type EtatCivilUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EtatCivilUpdateManyMutationInput, Prisma.EtatCivilUncheckedUpdateManyInput>;
    where?: Prisma.EtatCivilWhereInput;
    limit?: number;
};
export type EtatCivilUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelect<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    include?: Prisma.EtatCivilInclude<ExtArgs> | null;
    where: Prisma.EtatCivilWhereUniqueInput;
    create: Prisma.XOR<Prisma.EtatCivilCreateInput, Prisma.EtatCivilUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EtatCivilUpdateInput, Prisma.EtatCivilUncheckedUpdateInput>;
};
export type EtatCivilDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelect<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    include?: Prisma.EtatCivilInclude<ExtArgs> | null;
    where: Prisma.EtatCivilWhereUniqueInput;
};
export type EtatCivilDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EtatCivilWhereInput;
    limit?: number;
};
export type EtatCivil$employeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EtatCivilDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EtatCivilSelect<ExtArgs> | null;
    omit?: Prisma.EtatCivilOmit<ExtArgs> | null;
    include?: Prisma.EtatCivilInclude<ExtArgs> | null;
};
export {};
