export class PagedList<T> {

    data: Array<T>;

    totalPage: number = 0;

    totalCount: number = 0;

    total: number = 0;

    pageNumber: number = 1;

    pageSize: number = 0;

    constructor() {
        this.data = new Array<T>();
    }
}
