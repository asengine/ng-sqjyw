import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageList } from '../models/pagelist';
import { RSJ_URL } from '../config/service.config';
import { ResponseResult } from '../models/reponseresult';
import { SettingsService } from '@delon/theme';

@Injectable()
export class InsuranceService {
    apiUrl = '/api/unemployment/insurance';

    constructor(
        private http: HttpClient,
        public settings: SettingsService,
        @Inject(RSJ_URL) private baseUrl: string
    ) {

    }

    public getListById(
        idcard: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/id/${idcard}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    public getListBySi(
        sicard: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/si/${sicard}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    getSingle(id: number) {
        const url = `${this.baseUrl}${this.apiUrl}/${id}`;
        const result = this.http.get<any>(url);
        return result;
    }
}
