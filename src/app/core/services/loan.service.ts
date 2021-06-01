import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageList } from '../models/pagelist';
import { RSJ_URL } from '../config/service.config';
import { ResponseResult } from '../models/reponseresult';
import { SettingsService } from '@delon/theme';

@Injectable()
export class LoanService {

    apiUrl = '/api/loan';

    constructor(
        private http: HttpClient,
        public settings: SettingsService,
        @Inject(RSJ_URL) private baseUrl: string
    ) {

    }

    public getEnterpriseById(
        id: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number) {
        const url = `${this.baseUrl}${this.apiUrl}/enterprise/id/${id}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    public getEnterpriseBySi(
        id: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number) {
        const url = `${this.baseUrl}${this.apiUrl}/enterprise/si/${id}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    public getPersonalById(
        id: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number) {
        const url = `${this.baseUrl}${this.apiUrl}/personal/id/${id}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    public getPersonalBySi(
        id: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number) {
        const url = `${this.baseUrl}${this.apiUrl}/personal/si/${id}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }
}
