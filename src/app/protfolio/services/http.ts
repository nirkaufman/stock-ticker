export namespace Http {
    export interface OnResult<T, E> {
        onLoad(apiName?: string): void;
        onSuccess(apiName?: string, data?: T): void;
        onError(apiName?: string, error?: E): void;
    }
    export class QueryString {

        private keyValMap: Map<string, string> = new Map<string, string>();

        add(key: string, value: string): QueryString {
            this.keyValMap.set(key, value);
            return this;
        }
        build(): string {
            let res: string = '?';
            this.keyValMap.forEach((value: string, key: string) => {
                res += key + '=' + value + '&';
            });
            return res.slice(0, -1);
        }
    }
}
