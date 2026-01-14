import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BanqueModel = runtime.Types.Result.DefaultSelection<Prisma.$BanquePayload>;
export type AggregateBanque = {
    _count: BanqueCountAggregateOutputType | null;
    _avg: BanqueAvgAggregateOutputType | null;
    _sum: BanqueSumAggregateOutputType | null;
    _min: BanqueMinAggregateOutputType | null;
    _max: BanqueMaxAggregateOutputType | null;
};
export type BanqueAvgAggregateOutputType = {
    id: number | null;
};
export type BanqueSumAggregateOutputType = {
    id: number | null;
};
export type BanqueMinAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type BanqueMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type BanqueCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type BanqueAvgAggregateInputType = {
    id?: true;
};
export type BanqueSumAggregateInputType = {
    id?: true;
};
export type BanqueMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type BanqueMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type BanqueCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type BanqueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BanqueWhereInput;
    orderBy?: Prisma.BanqueOrderByWithRelationInput | Prisma.BanqueOrderByWithRelationInput[];
    cursor?: Prisma.BanqueWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BanqueCountAggregateInputType;
    _avg?: BanqueAvgAggregateInputType;
    _sum?: BanqueSumAggregateInputType;
    _min?: BanqueMinAggregateInputType;
    _max?: BanqueMaxAggregateInputType;
};
export type GetBanqueAggregateType<T extends BanqueAggregateArgs> = {
    [P in keyof T & keyof AggregateBanque]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBanque[P]> : Prisma.GetScalarType<T[P], AggregateBanque[P]>;
};
export type BanqueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BanqueWhereInput;
    orderBy?: Prisma.BanqueOrderByWithAggregationInput | Prisma.BanqueOrderByWithAggregationInput[];
    by: Prisma.BanqueScalarFieldEnum[] | Prisma.BanqueScalarFieldEnum;
    having?: Prisma.BanqueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BanqueCountAggregateInputType | true;
    _avg?: BanqueAvgAggregateInputType;
    _sum?: BanqueSumAggregateInputType;
    _min?: BanqueMinAggregateInputType;
    _max?: BanqueMaxAggregateInputType;
};
export type BanqueGroupByOutputType = {
    id: number;
    name: string;
    _count: BanqueCountAggregateOutputType | null;
    _avg: BanqueAvgAggregateOutputType | null;
    _sum: BanqueSumAggregateOutputType | null;
    _min: BanqueMinAggregateOutputType | null;
    _max: BanqueMaxAggregateOutputType | null;
};
type GetBanqueGroupByPayload<T extends BanqueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BanqueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BanqueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BanqueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BanqueGroupByOutputType[P]>;
}>>;
export type BanqueWhereInput = {
    AND?: Prisma.BanqueWhereInput | Prisma.BanqueWhereInput[];
    OR?: Prisma.BanqueWhereInput[];
    NOT?: Prisma.BanqueWhereInput | Prisma.BanqueWhereInput[];
    id?: Prisma.IntFilter<"Banque"> | number;
    name?: Prisma.StringFilter<"Banque"> | string;
    employees?: Prisma.EmployeeListRelationFilter;
};
export type BanqueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    employees?: Prisma.EmployeeOrderByRelationAggregateInput;
};
export type BanqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BanqueWhereInput | Prisma.BanqueWhereInput[];
    OR?: Prisma.BanqueWhereInput[];
    NOT?: Prisma.BanqueWhereInput | Prisma.BanqueWhereInput[];
    name?: Prisma.StringFilter<"Banque"> | string;
    employees?: Prisma.EmployeeListRelationFilter;
}, "id">;
export type BanqueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.BanqueCountOrderByAggregateInput;
    _avg?: Prisma.BanqueAvgOrderByAggregateInput;
    _max?: Prisma.BanqueMaxOrderByAggregateInput;
    _min?: Prisma.BanqueMinOrderByAggregateInput;
    _sum?: Prisma.BanqueSumOrderByAggregateInput;
};
export type BanqueScalarWhereWithAggregatesInput = {
    AND?: Prisma.BanqueScalarWhereWithAggregatesInput | Prisma.BanqueScalarWhereWithAggregatesInput[];
    OR?: Prisma.BanqueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BanqueScalarWhereWithAggregatesInput | Prisma.BanqueScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Banque"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Banque"> | string;
};
export type BanqueCreateInput = {
    name: string;
    employees?: Prisma.EmployeeCreateNestedManyWithoutBanqueInput;
};
export type BanqueUncheckedCreateInput = {
    id?: number;
    name: string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutBanqueInput;
};
export type BanqueUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employees?: Prisma.EmployeeUpdateManyWithoutBanqueNestedInput;
};
export type BanqueUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutBanqueNestedInput;
};
export type BanqueCreateManyInput = {
    id?: number;
    name: string;
};
export type BanqueUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BanqueUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BanqueScalarRelationFilter = {
    is?: Prisma.BanqueWhereInput;
    isNot?: Prisma.BanqueWhereInput;
};
export type BanqueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type BanqueAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type BanqueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type BanqueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type BanqueSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type BanqueCreateNestedOneWithoutEmployeesInput = {
    create?: Prisma.XOR<Prisma.BanqueCreateWithoutEmployeesInput, Prisma.BanqueUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.BanqueCreateOrConnectWithoutEmployeesInput;
    connect?: Prisma.BanqueWhereUniqueInput;
};
export type BanqueUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.BanqueCreateWithoutEmployeesInput, Prisma.BanqueUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.BanqueCreateOrConnectWithoutEmployeesInput;
    upsert?: Prisma.BanqueUpsertWithoutEmployeesInput;
    connect?: Prisma.BanqueWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BanqueUpdateToOneWithWhereWithoutEmployeesInput, Prisma.BanqueUpdateWithoutEmployeesInput>, Prisma.BanqueUncheckedUpdateWithoutEmployeesInput>;
};
export type BanqueCreateWithoutEmployeesInput = {
    name: string;
};
export type BanqueUncheckedCreateWithoutEmployeesInput = {
    id?: number;
    name: string;
};
export type BanqueCreateOrConnectWithoutEmployeesInput = {
    where: Prisma.BanqueWhereUniqueInput;
    create: Prisma.XOR<Prisma.BanqueCreateWithoutEmployeesInput, Prisma.BanqueUncheckedCreateWithoutEmployeesInput>;
};
export type BanqueUpsertWithoutEmployeesInput = {
    update: Prisma.XOR<Prisma.BanqueUpdateWithoutEmployeesInput, Prisma.BanqueUncheckedUpdateWithoutEmployeesInput>;
    create: Prisma.XOR<Prisma.BanqueCreateWithoutEmployeesInput, Prisma.BanqueUncheckedCreateWithoutEmployeesInput>;
    where?: Prisma.BanqueWhereInput;
};
export type BanqueUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: Prisma.BanqueWhereInput;
    data: Prisma.XOR<Prisma.BanqueUpdateWithoutEmployeesInput, Prisma.BanqueUncheckedUpdateWithoutEmployeesInput>;
};
export type BanqueUpdateWithoutEmployeesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BanqueUncheckedUpdateWithoutEmployeesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BanqueCountOutputType = {
    employees: number;
};
export type BanqueCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | BanqueCountOutputTypeCountEmployeesArgs;
};
export type BanqueCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueCountOutputTypeSelect<ExtArgs> | null;
};
export type BanqueCountOutputTypeCountEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
export type BanqueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    employees?: boolean | Prisma.Banque$employeesArgs<ExtArgs>;
    _count?: boolean | Prisma.BanqueCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["banque"]>;
export type BanqueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["banque"]>;
export type BanqueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["banque"]>;
export type BanqueSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type BanqueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["banque"]>;
export type BanqueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | Prisma.Banque$employeesArgs<ExtArgs>;
    _count?: boolean | Prisma.BanqueCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BanqueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type BanqueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $BanquePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Banque";
    objects: {
        employees: Prisma.$EmployeePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
    }, ExtArgs["result"]["banque"]>;
    composites: {};
};
export type BanqueGetPayload<S extends boolean | null | undefined | BanqueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BanquePayload, S>;
export type BanqueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BanqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BanqueCountAggregateInputType | true;
};
export interface BanqueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Banque'];
        meta: {
            name: 'Banque';
        };
    };
    findUnique<T extends BanqueFindUniqueArgs>(args: Prisma.SelectSubset<T, BanqueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BanqueClient<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BanqueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BanqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BanqueClient<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BanqueFindFirstArgs>(args?: Prisma.SelectSubset<T, BanqueFindFirstArgs<ExtArgs>>): Prisma.Prisma__BanqueClient<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BanqueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BanqueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BanqueClient<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BanqueFindManyArgs>(args?: Prisma.SelectSubset<T, BanqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BanqueCreateArgs>(args: Prisma.SelectSubset<T, BanqueCreateArgs<ExtArgs>>): Prisma.Prisma__BanqueClient<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BanqueCreateManyArgs>(args?: Prisma.SelectSubset<T, BanqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BanqueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BanqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BanqueDeleteArgs>(args: Prisma.SelectSubset<T, BanqueDeleteArgs<ExtArgs>>): Prisma.Prisma__BanqueClient<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BanqueUpdateArgs>(args: Prisma.SelectSubset<T, BanqueUpdateArgs<ExtArgs>>): Prisma.Prisma__BanqueClient<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BanqueDeleteManyArgs>(args?: Prisma.SelectSubset<T, BanqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BanqueUpdateManyArgs>(args: Prisma.SelectSubset<T, BanqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BanqueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BanqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BanqueUpsertArgs>(args: Prisma.SelectSubset<T, BanqueUpsertArgs<ExtArgs>>): Prisma.Prisma__BanqueClient<runtime.Types.Result.GetResult<Prisma.$BanquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BanqueCountArgs>(args?: Prisma.Subset<T, BanqueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BanqueCountAggregateOutputType> : number>;
    aggregate<T extends BanqueAggregateArgs>(args: Prisma.Subset<T, BanqueAggregateArgs>): Prisma.PrismaPromise<GetBanqueAggregateType<T>>;
    groupBy<T extends BanqueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BanqueGroupByArgs['orderBy'];
    } : {
        orderBy?: BanqueGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BanqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBanqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BanqueFieldRefs;
}
export interface Prisma__BanqueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employees<T extends Prisma.Banque$employeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Banque$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BanqueFieldRefs {
    readonly id: Prisma.FieldRef<"Banque", 'Int'>;
    readonly name: Prisma.FieldRef<"Banque", 'String'>;
}
export type BanqueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelect<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    include?: Prisma.BanqueInclude<ExtArgs> | null;
    where: Prisma.BanqueWhereUniqueInput;
};
export type BanqueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelect<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    include?: Prisma.BanqueInclude<ExtArgs> | null;
    where: Prisma.BanqueWhereUniqueInput;
};
export type BanqueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelect<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    include?: Prisma.BanqueInclude<ExtArgs> | null;
    where?: Prisma.BanqueWhereInput;
    orderBy?: Prisma.BanqueOrderByWithRelationInput | Prisma.BanqueOrderByWithRelationInput[];
    cursor?: Prisma.BanqueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BanqueScalarFieldEnum | Prisma.BanqueScalarFieldEnum[];
};
export type BanqueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelect<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    include?: Prisma.BanqueInclude<ExtArgs> | null;
    where?: Prisma.BanqueWhereInput;
    orderBy?: Prisma.BanqueOrderByWithRelationInput | Prisma.BanqueOrderByWithRelationInput[];
    cursor?: Prisma.BanqueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BanqueScalarFieldEnum | Prisma.BanqueScalarFieldEnum[];
};
export type BanqueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelect<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    include?: Prisma.BanqueInclude<ExtArgs> | null;
    where?: Prisma.BanqueWhereInput;
    orderBy?: Prisma.BanqueOrderByWithRelationInput | Prisma.BanqueOrderByWithRelationInput[];
    cursor?: Prisma.BanqueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BanqueScalarFieldEnum | Prisma.BanqueScalarFieldEnum[];
};
export type BanqueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelect<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    include?: Prisma.BanqueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BanqueCreateInput, Prisma.BanqueUncheckedCreateInput>;
};
export type BanqueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BanqueCreateManyInput | Prisma.BanqueCreateManyInput[];
};
export type BanqueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    data: Prisma.BanqueCreateManyInput | Prisma.BanqueCreateManyInput[];
};
export type BanqueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelect<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    include?: Prisma.BanqueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BanqueUpdateInput, Prisma.BanqueUncheckedUpdateInput>;
    where: Prisma.BanqueWhereUniqueInput;
};
export type BanqueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BanqueUpdateManyMutationInput, Prisma.BanqueUncheckedUpdateManyInput>;
    where?: Prisma.BanqueWhereInput;
    limit?: number;
};
export type BanqueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BanqueUpdateManyMutationInput, Prisma.BanqueUncheckedUpdateManyInput>;
    where?: Prisma.BanqueWhereInput;
    limit?: number;
};
export type BanqueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelect<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    include?: Prisma.BanqueInclude<ExtArgs> | null;
    where: Prisma.BanqueWhereUniqueInput;
    create: Prisma.XOR<Prisma.BanqueCreateInput, Prisma.BanqueUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BanqueUpdateInput, Prisma.BanqueUncheckedUpdateInput>;
};
export type BanqueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelect<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    include?: Prisma.BanqueInclude<ExtArgs> | null;
    where: Prisma.BanqueWhereUniqueInput;
};
export type BanqueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BanqueWhereInput;
    limit?: number;
};
export type Banque$employeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BanqueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BanqueSelect<ExtArgs> | null;
    omit?: Prisma.BanqueOmit<ExtArgs> | null;
    include?: Prisma.BanqueInclude<ExtArgs> | null;
};
export {};
