import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, RSJ_URL } from '../config/service.config';
import { JsonResult } from '@core/models/json-result';
import { Renyuanjiben } from '@core/models/renyuanjiben';
import { PagedList } from '@core/models/paged-list';

/**
 * 社会保险-申报
 */
@Injectable()
export class ShehuibaoxianService {

    apiUrl = '/api/loan';

    constructor(
        private http: HttpClient,
        @Inject(BASE_URL) private baseUrl: string
    ) {

    }


    /**
     * 
     * @param bac001 个人编号
     * @returns 
     */
    public getRenyuanjiben(
        bac001: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/api/v2/card/getpersonid`;
        const result = this.http.post<JsonResult<PagedList<Renyuanjiben>>>(url,
            {
                "bac001": bac001,
                "pageNo": "1",
                "pageSize": "1"
            }
        );
        return result;
    }

    public getRenyuanjibenTest() {
        const result = this.http.get<JsonResult<PagedList<Renyuanjiben>>>('../../assets/data/renyuanjiben.json');
        return result;
    }
}
