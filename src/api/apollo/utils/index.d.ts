export type GQLTypeName<T extends GqlTypeNamePartial> = {
  __typename: T['__typename']
}

export type GqlTypeNamePartial<T extends string = string> = {
  __typename: T
}

export type GqlTypeNamePartialOf<
  GQLType extends GqlTypeNamePartial
> = GqlTypeNamePartial<Required<GQLType>['__typename']>
