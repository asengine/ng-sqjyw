import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, RSJ_URL } from '../config/service.config';
import { JsonResult } from '@core/models/json-result';
import { PersonId } from '@core/models/personid';

/**
 * 社保卡
 */
@Injectable()
export class ShebaokaService {

    apiUrl = '/api/loan';

    constructor(
        private http: HttpClient,
        @Inject(BASE_URL) private baseUrl: string
    ) {

    }

    /**
     * 个人编号查询
     * @param baz805 省人员识别号（证件号码或者省人员识别号不可同时为空）
     * @param aac147 证件号码
     * @param aac003 姓名
     * @returns 
     */
    public getPersonId(
        baz805: string,
        aac147: string,
        aac003: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/api/v2/card/getpersonid`;
        const result = this.http.post<JsonResult<PersonId>>(url,
            {
                "aac147": aac147,
                "aac003": aac003,
                "baz805": baz805
            }
        );
        return result;
    }
}
