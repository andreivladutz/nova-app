export type PromiseParam<T extends Promise<any>> = T extends Promise<infer P>
  ? P
  : never;

export type ArrayParam<T extends Array<any>> = T extends Array<infer P>
  ? P
  : never;

export type PickSubset<Subset, T> = T extends Subset ? T : never;

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

/*
 * remove a prop from a union of object types
 * e.g. "id" from { type: "number", id: string} | { type: "rich_text", id: string}
 *
 * - UniqueKey needs to be a prop name that points
 *   to a unique value in each object from the union
 *   e.g. "type" in the example above
 *
 * - KeyToRemove the key to be removed from each object in the union
 *   e.g. "id" in the example above
 */
type RemovePropFromUnionMap<
  ObjectsUnion extends Record<string, any>,
  UniqueKey extends keyof ObjectsUnion,
  KeyToRemove extends keyof ObjectsUnion
> = {
  [K in ObjectsUnion[UniqueKey]]: Omit<
    PickSubset<{ [UK in UniqueKey]: K }, ObjectsUnion>,
    KeyToRemove
  >;
};
export type RemovePropFromUnion<
  ObjectsUnion extends Record<string, any>,
  UniqueKey extends keyof ObjectsUnion,
  KeyToRemove extends keyof ObjectsUnion
> = RemovePropFromUnionMap<
  ObjectsUnion,
  UniqueKey,
  KeyToRemove
>[keyof RemovePropFromUnionMap<ObjectsUnion, UniqueKey, KeyToRemove>];
