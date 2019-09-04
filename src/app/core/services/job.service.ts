import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageList } from '../models/pagelist';
import { JYW_URL } from '../config/service.config';
import { ResponseResult } from '../models/reponseresult';
import { SettingsService } from '@delon/theme';

@Injectable()
export class JobService {
    apiUrl = 'api/job';

    constructor(
        private http: HttpClient,
        public settings: SettingsService,
        @Inject(JYW_URL) private baseUrl: string
    ) {

    }

    public getList(
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number,
        key: string,
    ) {
        const url = `${this.baseUrl}${this.apiUrl}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}&key=${key}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    getSingle(id: number) {
        const url = `${this.baseUrl}${this.apiUrl}/${id}`;
        const result = this.http.get<any>(url);
        return result;
    }
}
