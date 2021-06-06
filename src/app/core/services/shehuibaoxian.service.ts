import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../config/service.config';
import { JsonResult } from '@core/models/json-result';
import { Renyuanjiben } from '@core/models/shehuibaoxian/renyuanjiben';
import { PagedList } from '@core/models/paged-list';
import { Renyuanjiaofei } from '@core/models/shehuibaoxian/renyuanjiaofei';
import { Renyuancanbao } from '@core/models/shehuibaoxian/renyuancanbao';
import { Renyuancanbaobiangeng } from '@core/models/shehuibaoxian/renyuancanbaobiangeng';
import { Renyuanjiaofeijishu } from '@core/models/shehuibaoxian/Renyuanjiaofeijishu';
import { Renyuanjichubiangeng } from '@core/models/shehuibaoxian/renyuanjichubiangeng';
import { Renyuanyuezhanghu } from '@core/models/shehuibaoxian/renyuanyuezhanghu';
import { Renyuannianzhanghu } from '@core/models/shehuibaoxian/renyuannianzhanghu';

/**
 * 20210520省一体化接口文档——社会保险-申报 
 */
@Injectable()
export class ShehuibaoxianService {

    apiUrl = '/api/v2/social';

    constructor(
        private http: HttpClient,
        @Inject(BASE_URL) private baseUrl: string
    ) {

    }


    /**
     * 3.1	人员基本信息查询
     * @param bac001 个人编号
     * @param pageNo 页码
     * @param pageSize 每页条数
     * @returns 
     */
    public getRenyuanjiben(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getrenyuanjiben`;
        const result = this.http.get<JsonResult<PagedList<Renyuanjiben>>>('../../assets/data/renyuanjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Renyuanjiben>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.2	人员参保信息查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getRenyuancanbao(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getrenyuancanbao`;
        const result = this.http.get<JsonResult<PagedList<Renyuancanbao>>>('../../assets/data/renyuancanbao.json');
        // const result = this.http.post<JsonResult<PagedList<Renyuancanbao>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.3	人员参保变更信息查询
     * @param bac001 个人编号
     * @param aae030 变更开始日期
     * @param aae031 变更终止日期
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getRenyuancanbaobiangeng(
        bac001: string,
        aae030: string,
        aae031: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getrenyuancanbaobiangeng`;
        const result = this.http.get<JsonResult<PagedList<Renyuancanbaobiangeng>>>('../../assets/data/renyuancanbaobiangeng.json');
        // const result = this.http.post<JsonResult<PagedList<Renyuancanbaobiangeng>>>(url,
        //     {
        //         "bac001": bac001,
        //         "aae030": aae030,
        //         "aae031": aae031,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.4	人员缴费基数信息查询
     * @param bac001 个人编号
     * @param bab001 单位编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getRenyuanjiaofeijishu(
        bac001: string,
        bab001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getrenyuanjiaofeijishu`;
        const result = this.http.get<JsonResult<PagedList<Renyuanjiaofeijishu>>>('../../assets/data/renyuanjiaofeijishu.json');
        // const result = this.http.post<JsonResult<PagedList<Renyuanjiaofeijishu>>>(url,
        //     {
        //         "bac001": bac001,
        //         "bab001": bab001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.5	人员基础信息变更查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getRenyuanjichubiangeng(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getrenyuanjichubiangeng`;
        const result = this.http.get<JsonResult<PagedList<Renyuanjichubiangeng>>>('../../assets/data/renyuanjichubiangeng.json');
        // const result = this.http.post<JsonResult<PagedList<Renyuanjichubiangeng>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.6	人员缴费查询
     * @param bac001 个人编号
     * @param aae041 开始年月
     * @param aae042 终止年月
     * @param pageNo 页码
     * @param pageSize 每页条数
     */
    public getRenyuanjiaofei(
        bac001: string,
        aae041: string,
        aae042: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getrenyuanjiaofei`;
        const result = this.http.get<JsonResult<PagedList<Renyuanjiaofei>>>('../../assets/data/renyuanjiaofei.json');
        // const result = this.http.post<JsonResult<PagedList<Renyuanjiaofei>>>(url,
        //     {
        //         "bac001": bac001,
        //         "aae041":aae041,
        //         "aae042":aae042,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }


    /**
     * 3.7	人员月账户信息查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getRenyuanyuezhanghu(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getrenyuanyuezhanghu`;
        const result = this.http.get<JsonResult<PagedList<Renyuanyuezhanghu>>>('../../assets/data/renyuanyuezhanghu.json');
        // const result = this.http.post<JsonResult<PagedList<Renyuanyuezhanghu>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.8	人员年账户信息查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getRenyuannianzhanghu(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getrenyuannianzhanghu`;
        const result = this.http.get<JsonResult<PagedList<Renyuannianzhanghu>>>('../../assets/data/renyuannianzhanghu.json');
        // const result = this.http.post<JsonResult<PagedList<Renyuanyuezhanghu>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }
}
