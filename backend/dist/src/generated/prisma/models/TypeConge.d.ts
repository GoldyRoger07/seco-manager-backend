import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TypeCongeModel = runtime.Types.Result.DefaultSelection<Prisma.$TypeCongePayload>;
export type AggregateTypeConge = {
    _count: TypeCongeCountAggregateOutputType | null;
    _avg: TypeCongeAvgAggregateOutputType | null;
    _sum: TypeCongeSumAggregateOutputType | null;
    _min: TypeCongeMinAggregateOutputType | null;
    _max: TypeCongeMaxAggregateOutputType | null;
};
export type TypeCongeAvgAggregateOutputType = {
    id: number | null;
};
export type TypeCongeSumAggregateOutputType = {
    id: number | null;
};
export type TypeCongeMinAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type TypeCongeMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type TypeCongeCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type TypeCongeAvgAggregateInputType = {
    id?: true;
};
export type TypeCongeSumAggregateInputType = {
    id?: true;
};
export type TypeCongeMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type TypeCongeMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type TypeCongeCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type TypeCongeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeCongeWhereInput;
    orderBy?: Prisma.TypeCongeOrderByWithRelationInput | Prisma.TypeCongeOrderByWithRelationInput[];
    cursor?: Prisma.TypeCongeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TypeCongeCountAggregateInputType;
    _avg?: TypeCongeAvgAggregateInputType;
    _sum?: TypeCongeSumAggregateInputType;
    _min?: TypeCongeMinAggregateInputType;
    _max?: TypeCongeMaxAggregateInputType;
};
export type GetTypeCongeAggregateType<T extends TypeCongeAggregateArgs> = {
    [P in keyof T & keyof AggregateTypeConge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTypeConge[P]> : Prisma.GetScalarType<T[P], AggregateTypeConge[P]>;
};
export type TypeCongeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeCongeWhereInput;
    orderBy?: Prisma.TypeCongeOrderByWithAggregationInput | Prisma.TypeCongeOrderByWithAggregationInput[];
    by: Prisma.TypeCongeScalarFieldEnum[] | Prisma.TypeCongeScalarFieldEnum;
    having?: Prisma.TypeCongeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TypeCongeCountAggregateInputType | true;
    _avg?: TypeCongeAvgAggregateInputType;
    _sum?: TypeCongeSumAggregateInputType;
    _min?: TypeCongeMinAggregateInputType;
    _max?: TypeCongeMaxAggregateInputType;
};
export type TypeCongeGroupByOutputType = {
    id: number;
    name: string;
    _count: TypeCongeCountAggregateOutputType | null;
    _avg: TypeCongeAvgAggregateOutputType | null;
    _sum: TypeCongeSumAggregateOutputType | null;
    _min: TypeCongeMinAggregateOutputType | null;
    _max: TypeCongeMaxAggregateOutputType | null;
};
type GetTypeCongeGroupByPayload<T extends TypeCongeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TypeCongeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TypeCongeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TypeCongeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TypeCongeGroupByOutputType[P]>;
}>>;
export type TypeCongeWhereInput = {
    AND?: Prisma.TypeCongeWhereInput | Prisma.TypeCongeWhereInput[];
    OR?: Prisma.TypeCongeWhereInput[];
    NOT?: Prisma.TypeCongeWhereInput | Prisma.TypeCongeWhereInput[];
    id?: Prisma.IntFilter<"TypeConge"> | number;
    name?: Prisma.StringFilter<"TypeConge"> | string;
    employees?: Prisma.EmployeeListRelationFilter;
};
export type TypeCongeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    employees?: Prisma.EmployeeOrderByRelationAggregateInput;
};
export type TypeCongeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TypeCongeWhereInput | Prisma.TypeCongeWhereInput[];
    OR?: Prisma.TypeCongeWhereInput[];
    NOT?: Prisma.TypeCongeWhereInput | Prisma.TypeCongeWhereInput[];
    name?: Prisma.StringFilter<"TypeConge"> | string;
    employees?: Prisma.EmployeeListRelationFilter;
}, "id">;
export type TypeCongeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.TypeCongeCountOrderByAggregateInput;
    _avg?: Prisma.TypeCongeAvgOrderByAggregateInput;
    _max?: Prisma.TypeCongeMaxOrderByAggregateInput;
    _min?: Prisma.TypeCongeMinOrderByAggregateInput;
    _sum?: Prisma.TypeCongeSumOrderByAggregateInput;
};
export type TypeCongeScalarWhereWithAggregatesInput = {
    AND?: Prisma.TypeCongeScalarWhereWithAggregatesInput | Prisma.TypeCongeScalarWhereWithAggregatesInput[];
    OR?: Prisma.TypeCongeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TypeCongeScalarWhereWithAggregatesInput | Prisma.TypeCongeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TypeConge"> | number;
    name?: Prisma.StringWithAggregatesFilter<"TypeConge"> | string;
};
export type TypeCongeCreateInput = {
    name: string;
    employees?: Prisma.EmployeeCreateNestedManyWithoutTypeCongeInput;
};
export type TypeCongeUncheckedCreateInput = {
    id?: number;
    name: string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutTypeCongeInput;
};
export type TypeCongeUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employees?: Prisma.EmployeeUpdateManyWithoutTypeCongeNestedInput;
};
export type TypeCongeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutTypeCongeNestedInput;
};
export type TypeCongeCreateManyInput = {
    id?: number;
    name: string;
};
export type TypeCongeUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TypeCongeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TypeCongeScalarRelationFilter = {
    is?: Prisma.TypeCongeWhereInput;
    isNot?: Prisma.TypeCongeWhereInput;
};
export type TypeCongeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type TypeCongeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TypeCongeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type TypeCongeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type TypeCongeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TypeCongeCreateNestedOneWithoutEmployeesInput = {
    create?: Prisma.XOR<Prisma.TypeCongeCreateWithoutEmployeesInput, Prisma.TypeCongeUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.TypeCongeCreateOrConnectWithoutEmployeesInput;
    connect?: Prisma.TypeCongeWhereUniqueInput;
};
export type TypeCongeUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.TypeCongeCreateWithoutEmployeesInput, Prisma.TypeCongeUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.TypeCongeCreateOrConnectWithoutEmployeesInput;
    upsert?: Prisma.TypeCongeUpsertWithoutEmployeesInput;
    connect?: Prisma.TypeCongeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TypeCongeUpdateToOneWithWhereWithoutEmployeesInput, Prisma.TypeCongeUpdateWithoutEmployeesInput>, Prisma.TypeCongeUncheckedUpdateWithoutEmployeesInput>;
};
export type TypeCongeCreateWithoutEmployeesInput = {
    name: string;
};
export type TypeCongeUncheckedCreateWithoutEmployeesInput = {
    id?: number;
    name: string;
};
export type TypeCongeCreateOrConnectWithoutEmployeesInput = {
    where: Prisma.TypeCongeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TypeCongeCreateWithoutEmployeesInput, Prisma.TypeCongeUncheckedCreateWithoutEmployeesInput>;
};
export type TypeCongeUpsertWithoutEmployeesInput = {
    update: Prisma.XOR<Prisma.TypeCongeUpdateWithoutEmployeesInput, Prisma.TypeCongeUncheckedUpdateWithoutEmployeesInput>;
    create: Prisma.XOR<Prisma.TypeCongeCreateWithoutEmployeesInput, Prisma.TypeCongeUncheckedCreateWithoutEmployeesInput>;
    where?: Prisma.TypeCongeWhereInput;
};
export type TypeCongeUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: Prisma.TypeCongeWhereInput;
    data: Prisma.XOR<Prisma.TypeCongeUpdateWithoutEmployeesInput, Prisma.TypeCongeUncheckedUpdateWithoutEmployeesInput>;
};
export type TypeCongeUpdateWithoutEmployeesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TypeCongeUncheckedUpdateWithoutEmployeesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TypeCongeCountOutputType = {
    employees: number;
};
export type TypeCongeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | TypeCongeCountOutputTypeCountEmployeesArgs;
};
export type TypeCongeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeCountOutputTypeSelect<ExtArgs> | null;
};
export type TypeCongeCountOutputTypeCountEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
export type TypeCongeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    employees?: boolean | Prisma.TypeConge$employeesArgs<ExtArgs>;
    _count?: boolean | Prisma.TypeCongeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["typeConge"]>;
export type TypeCongeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["typeConge"]>;
export type TypeCongeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["typeConge"]>;
export type TypeCongeSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type TypeCongeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["typeConge"]>;
export type TypeCongeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | Prisma.TypeConge$employeesArgs<ExtArgs>;
    _count?: boolean | Prisma.TypeCongeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TypeCongeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TypeCongeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TypeCongePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TypeConge";
    objects: {
        employees: Prisma.$EmployeePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
    }, ExtArgs["result"]["typeConge"]>;
    composites: {};
};
export type TypeCongeGetPayload<S extends boolean | null | undefined | TypeCongeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TypeCongePayload, S>;
export type TypeCongeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TypeCongeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TypeCongeCountAggregateInputType | true;
};
export interface TypeCongeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TypeConge'];
        meta: {
            name: 'TypeConge';
        };
    };
    findUnique<T extends TypeCongeFindUniqueArgs>(args: Prisma.SelectSubset<T, TypeCongeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TypeCongeClient<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TypeCongeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TypeCongeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeCongeClient<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TypeCongeFindFirstArgs>(args?: Prisma.SelectSubset<T, TypeCongeFindFirstArgs<ExtArgs>>): Prisma.Prisma__TypeCongeClient<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TypeCongeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TypeCongeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeCongeClient<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TypeCongeFindManyArgs>(args?: Prisma.SelectSubset<T, TypeCongeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TypeCongeCreateArgs>(args: Prisma.SelectSubset<T, TypeCongeCreateArgs<ExtArgs>>): Prisma.Prisma__TypeCongeClient<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TypeCongeCreateManyArgs>(args?: Prisma.SelectSubset<T, TypeCongeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TypeCongeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TypeCongeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TypeCongeDeleteArgs>(args: Prisma.SelectSubset<T, TypeCongeDeleteArgs<ExtArgs>>): Prisma.Prisma__TypeCongeClient<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TypeCongeUpdateArgs>(args: Prisma.SelectSubset<T, TypeCongeUpdateArgs<ExtArgs>>): Prisma.Prisma__TypeCongeClient<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TypeCongeDeleteManyArgs>(args?: Prisma.SelectSubset<T, TypeCongeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TypeCongeUpdateManyArgs>(args: Prisma.SelectSubset<T, TypeCongeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TypeCongeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TypeCongeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TypeCongeUpsertArgs>(args: Prisma.SelectSubset<T, TypeCongeUpsertArgs<ExtArgs>>): Prisma.Prisma__TypeCongeClient<runtime.Types.Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TypeCongeCountArgs>(args?: Prisma.Subset<T, TypeCongeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TypeCongeCountAggregateOutputType> : number>;
    aggregate<T extends TypeCongeAggregateArgs>(args: Prisma.Subset<T, TypeCongeAggregateArgs>): Prisma.PrismaPromise<GetTypeCongeAggregateType<T>>;
    groupBy<T extends TypeCongeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TypeCongeGroupByArgs['orderBy'];
    } : {
        orderBy?: TypeCongeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TypeCongeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeCongeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TypeCongeFieldRefs;
}
export interface Prisma__TypeCongeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employees<T extends Prisma.TypeConge$employeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TypeConge$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TypeCongeFieldRefs {
    readonly id: Prisma.FieldRef<"TypeConge", 'Int'>;
    readonly name: Prisma.FieldRef<"TypeConge", 'String'>;
}
export type TypeCongeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelect<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    include?: Prisma.TypeCongeInclude<ExtArgs> | null;
    where: Prisma.TypeCongeWhereUniqueInput;
};
export type TypeCongeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelect<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    include?: Prisma.TypeCongeInclude<ExtArgs> | null;
    where: Prisma.TypeCongeWhereUniqueInput;
};
export type TypeCongeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelect<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    include?: Prisma.TypeCongeInclude<ExtArgs> | null;
    where?: Prisma.TypeCongeWhereInput;
    orderBy?: Prisma.TypeCongeOrderByWithRelationInput | Prisma.TypeCongeOrderByWithRelationInput[];
    cursor?: Prisma.TypeCongeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TypeCongeScalarFieldEnum | Prisma.TypeCongeScalarFieldEnum[];
};
export type TypeCongeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelect<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    include?: Prisma.TypeCongeInclude<ExtArgs> | null;
    where?: Prisma.TypeCongeWhereInput;
    orderBy?: Prisma.TypeCongeOrderByWithRelationInput | Prisma.TypeCongeOrderByWithRelationInput[];
    cursor?: Prisma.TypeCongeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TypeCongeScalarFieldEnum | Prisma.TypeCongeScalarFieldEnum[];
};
export type TypeCongeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelect<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    include?: Prisma.TypeCongeInclude<ExtArgs> | null;
    where?: Prisma.TypeCongeWhereInput;
    orderBy?: Prisma.TypeCongeOrderByWithRelationInput | Prisma.TypeCongeOrderByWithRelationInput[];
    cursor?: Prisma.TypeCongeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TypeCongeScalarFieldEnum | Prisma.TypeCongeScalarFieldEnum[];
};
export type TypeCongeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelect<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    include?: Prisma.TypeCongeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TypeCongeCreateInput, Prisma.TypeCongeUncheckedCreateInput>;
};
export type TypeCongeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TypeCongeCreateManyInput | Prisma.TypeCongeCreateManyInput[];
};
export type TypeCongeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    data: Prisma.TypeCongeCreateManyInput | Prisma.TypeCongeCreateManyInput[];
};
export type TypeCongeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelect<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    include?: Prisma.TypeCongeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TypeCongeUpdateInput, Prisma.TypeCongeUncheckedUpdateInput>;
    where: Prisma.TypeCongeWhereUniqueInput;
};
export type TypeCongeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TypeCongeUpdateManyMutationInput, Prisma.TypeCongeUncheckedUpdateManyInput>;
    where?: Prisma.TypeCongeWhereInput;
    limit?: number;
};
export type TypeCongeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TypeCongeUpdateManyMutationInput, Prisma.TypeCongeUncheckedUpdateManyInput>;
    where?: Prisma.TypeCongeWhereInput;
    limit?: number;
};
export type TypeCongeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelect<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    include?: Prisma.TypeCongeInclude<ExtArgs> | null;
    where: Prisma.TypeCongeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TypeCongeCreateInput, Prisma.TypeCongeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TypeCongeUpdateInput, Prisma.TypeCongeUncheckedUpdateInput>;
};
export type TypeCongeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelect<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    include?: Prisma.TypeCongeInclude<ExtArgs> | null;
    where: Prisma.TypeCongeWhereUniqueInput;
};
export type TypeCongeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeCongeWhereInput;
    limit?: number;
};
export type TypeConge$employeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TypeCongeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeCongeSelect<ExtArgs> | null;
    omit?: Prisma.TypeCongeOmit<ExtArgs> | null;
    include?: Prisma.TypeCongeInclude<ExtArgs> | null;
};
export {};
