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
        key: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}&key=${key}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    //根据身份证查询创业补贴列表
    public getBsListById(
        id: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/bs/id/${id}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    public getBsListBySi(
        si: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/bs/si/${si}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<any>(url);
        return result;
    }
}
