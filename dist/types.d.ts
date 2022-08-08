export declare type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export interface JsonMap {
    [member: string]: string | number | boolean | null | JsonArray | JsonMap;
}
export interface JsonArray extends Array<string | number | boolean | null | JsonArray | JsonMap> {
}
export declare type Json = JsonMap | JsonArray | string | number | boolean | null;
export {};
