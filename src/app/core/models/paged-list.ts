export class PagedList<T> {

    data: Array<T>;

    totalPage: number = 0;

    pageNumber: number = 1;

    pageSize: number = 0;

    constructor() {
        this.data = new Array<T>();
    }
}
