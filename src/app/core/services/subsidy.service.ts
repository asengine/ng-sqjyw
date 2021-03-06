import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageList } from '../models/pagelist';
import { RSJ_URL } from '../config/service.config';
import { ResponseResult } from '../models/reponseresult';
import { SettingsService } from '@delon/theme';

@Injectable()
export class SubsidyService {

    apiUrl = '/api/subsidy';

    constructor(
        private http: HttpClient,
        public settings: SettingsService,
        @Inject(RSJ_URL) private baseUrl: string
    ) {

    }

    getSsSingle(id: number) {
        const url = `${this.baseUrl}${this.apiUrl}/ss/${id}`;
        const result = this.http.get<any>(url);
        return result;
    }

    //根据身份证查询个人社保补贴列表
    public getSsListById(
        id: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/ss/id/${id}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    public getSsListBySi(
        si: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/ss/si/${si}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<any>(url);
        return result;
    }


    
    getBsSingle(id: number) {
        const url = `${this.baseUrl}${this.apiUrl}/bs/${id}`;
        const result = this.http.get<any>(url);
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


    getRtSingle(id: number) {
        const url = `${this.baseUrl}${this.apiUrl}/rt/${id}`;
        const result = this.http.get<any>(url);
        return result;
    }
    //根据身份证查询创业租金Rental
    public getRtListById(
        id: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/rt/id/${id}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    public getRtListBySi(
        si: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/rt/si/${si}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<any>(url);
        return result;
    }
}
