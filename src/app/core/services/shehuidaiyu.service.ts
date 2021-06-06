import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../config/service.config';
import { JsonResult } from '@core/models/json-result';
import { PersonId } from '@core/models/personid';
import { Yaopin } from '@core/models/shehuidaiyu/yaopin';
import { PagedList } from '@core/models/paged-list';

/**
 * 20210520省一体化接口文档——社会待遇
 */
@Injectable()
export class ShehuidaiyuService {

    apiUrl = '/api/v2/social';

    constructor(
        private http: HttpClient,
        @Inject(BASE_URL) private baseUrl: string
    ) {

    }

    /**
     * 3.1	药品信息查询
     * @param ala002 药品商品名编码
     * @param ala010 药品商品名
     * @param ala012 商品名拼音助记码
     * @param ala011 商品名五笔助记码
     * @param ala016 收费项目等级
     * @param ala003 药品通用名编码
     * @param ala006 药品通用名名称
     * @param pageNo 页码
     * @param pageSize 每页条数
     * @returns 
     */
    public getYaopin(
        ala002: string,
        ala010: string,
        ala012: string,
        ala011: string,
        ala016: string,
        ala003: string,
        ala006: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getyaoping`;
        const result = this.http.get<JsonResult<PagedList<Yaopin>>>('../../assets/data/yaopin.json');
        // const result = this.http.post<JsonResult<PersonId>>(url,
        //     {
        //         "aac147": aac147,
        //         "aac003": aac003,
        //         "baz805": baz805
        //     }
        // );
        return result;
    }
}
