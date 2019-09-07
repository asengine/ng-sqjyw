import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageList } from '../models/pagelist';
import { RSJ_URL } from '../config/service.config';
import { ResponseResult } from '../models/reponseresult';
import { SettingsService } from '@delon/theme';

@Injectable()
export class SubsidyService {

    apiUrl = 'api/subsidy';

    constructor(
        private http: HttpClient,
        public settings: SettingsService,
        @Inject(RSJ_URL) private baseUrl: string
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

    public getBsByIdcard(id: string) {
        const url = `${this.baseUrl}${this.apiUrl}/bs/id/${id}`;
        const result = this.http.get<any>(url);
        return result;
    }

    public getBsBySicard(id: string) {
        const url = `${this.baseUrl}${this.apiUrl}/bs/si/${id}`;
        const result = this.http.get<any>(url);
        return result;
    }
}
