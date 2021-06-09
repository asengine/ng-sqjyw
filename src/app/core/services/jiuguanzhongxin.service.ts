import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../config/service.config';
import { JsonResult } from '@core/models/json-result';
import { Shiyedengji } from '@core/models/jiuguanzhongxin/shiyedengji';
import { Jiuyekunnan } from '@core/models/jiuguanzhongxin/jiuyekunnan';
import { Jiuyechuangyezheng } from '@core/models/jiuguanzhongxin/jiuyechuangyezheng';
import { Danweijiuyedengji } from '@core/models/jiuguanzhongxin/danweijiuyedengji';

/**
 * 20210520省一体化接口文档——就管中心
 */
@Injectable()
export class JiuguanzhongxinService {

    apiUrl = '/api/v2/labour';

    constructor(
        private http: HttpClient,
        @Inject(BASE_URL) private baseUrl: string
    ) {

    }


    /**
     * 3.1	失业登记查询
     * @param bac001 个人唯一识别码
     * @param aac003 姓名
     * @param aac058 证件类型
     * @param aac147 证件号码
     * @returns 
     */
    public getShiyedengji(
        bac001: string,
        aac003: string,
        aac058: string,
        aac147: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getunemployregister`;
        const result = this.http.get<JsonResult<Shiyedengji>>('../../assets/data/unemployregister.json');
        // const result = this.http.post<JsonResult<Shiyedengji>>(url,
        //     {
        //         "bac001": bac001,
        //         "aac003": aac003,
        //         "aac058": aac058
        //         "aac147": aac147
        //     }
        // );
        return result;
    }

    /**
     * 3.2	就业困难人员查询
     * @param bac001 个人唯一识别码
     * @param aac003 姓名
     * @param aac058 证件类型
     * @param aac147 证件号码
     * @returns 
     */
    public getJiuyekunnan(
        bac001: string,
        aac003: string,
        aac058: string,
        aac147: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getemploydif`;
        const result = this.http.get<JsonResult<Jiuyekunnan>>('../../assets/data/employdif.json');
        // const result = this.http.post<JsonResult<Jiuyekunnan>>(url,
        //     {
        //         "bac001": bac001,
        //         "aac003": aac003,
        //         "aac058": aac058
        //         "aac147": aac147
        //     }
        // );
        return result;
    }

    /**
     *  3.3	就业创业证查询
     * @param bac001 个人唯一识别码
     * @param aac002 身份证号
     * @param aac003 姓名
     * @param adc001 就业创业证号
     * @returns 
     */
    public getJiuyechuangyezheng(
        bac001: string,
        aac002: string,
        aac003: string,
        adc001: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getcertificateinquiry`;
        const result = this.http.get<JsonResult<Jiuyechuangyezheng>>('../../assets/data/certificateinquiry.json');
        // const result = this.http.post<JsonResult<Jiuyechuangyezheng>>(url,
        //     {
        //         "bac001": bac001,
        //         "aac002": aac002,
        //         "aac003": aac003,
        //         "adc001": adc001
        //     }
        // );
        return result;
    }

    /**
     * 3.4	单位就业登记查询
     * @param bac001 个人唯一识别码
     * @param aac003 姓名
     * @param aac147 证件号码
     * @returns 
     */
    public getDanweijiuyedengji(
        bac001: string,
        aac003: string,
        aac147: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getcomemployregister`;
        const result = this.http.get<JsonResult<Danweijiuyedengji>>('../../assets/data/comemployregister.json');
        // const result = this.http.post<JsonResult<Danweijiuyedengji>>(url,
        //     {
        //         "bac001": bac001,
        //         "aac003": aac003,
        //         "aac147": aac147
        //     }
        // );
        return result;
    }
}
