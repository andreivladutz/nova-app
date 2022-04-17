export type PromiseParam<T extends Promise<any>> = T extends Promise<infer P>
  ? P
  : never;

export type ArrayParam<T extends Array<any>> = T extends Array<infer P>
  ? P
  : never;

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
