export class PageList<T> {

    Data: Array<T>;

    Total: number = 0;

    Page: number = 1;

    Size: number = 0;

    constructor() {
        this.Data = new Array<T>();
    }
}
