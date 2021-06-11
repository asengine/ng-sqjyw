import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../config/service.config';
import { JsonResult } from '@core/models/json-result';
import { Shiyedengji } from '@core/models/jiuguanzhongxin/shiyedengji';
import { Jiuyekunnan } from '@core/models/jiuguanzhongxin/jiuyekunnan';
import { Jiuyechuangyezheng } from '@core/models/jiuguanzhongxin/jiuyechuangyezheng';
import { Danweijiuyedengji } from '@core/models/jiuguanzhongxin/danweijiuyedengji';
import { Linghuojiuyedengji } from '@core/models/jiuguanzhongxin/linghuojiuyedengji';
import { Shiyebaoxianwengangfanhuan } from '@core/models/jiuguanzhongxin/shiyebaoxianwengangfanhuan';
import { Xiaoweiqiyedanbaodaikuan } from '@core/models/jiuguanzhongxin/xiaoweiqiyedanbaodaikuan';
import { Chuangyefuhuajidi } from '@core/models/jiuguanzhongxin/chuangyefuhuajidi';
import { PagedList } from '@core/models/paged-list';
import { Jiuyeyuanzhu } from '@core/models/jiuguanzhongxin/jiuyeyuanzhu';
import { Linghuojiuyerenyuanshebaobutie } from '@core/models/jiuguanzhongxin/linghuojiuyerenyuanshebaobutie';
import { DanWeiXiNaJiuYeKunNanRenYuanSheBaoBuTie } from '@core/models/jiuguanzhongxin/danweixinajiuyekunnanrenyuanshebaobutie';

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
     * 3.1:失业登记查询
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
     * 3.2:就业困难人员查询
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
     *  3.3:就业创业证查询
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
     * 3.4:单位就业登记查询
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

    /**
     * 3.5:灵活就业登记查询
     * @param bac001 个人编号
     * @param aac003
     * @param aac058
     * @param aac147
     * @returns
     */
    public getLinghuojiuyedengji(
        bac001: string,
        aac003: string,
        aac058: string,
        aac147: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getflexemployregister`;
        const result = this.http.get<JsonResult<Linghuojiuyedengji>>('../../assets/data/comemployregister.json');
        // const result = this.http.post<JsonResult<Linghuojiuyedengji>>(url,
        //     {
        //         "bac001": bac001,
        //         "aac003": aac003,
        //         "aac058": aac058,
        //         "aac147": aac147
        //     }
        // );
        return result;
    }

    /**
     * 3.6:失业保险稳岗返还查询
     * @param bac001 个人编号
     * @param aae128 
     * @returns 
     */
    public getShiyebaoxianwengangfanhuan(
        bac001: string,
        aae128: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getstablepost`;
        const result = this.http.get<JsonResult<Shiyebaoxianwengangfanhuan>>('../../assets/data/comemployregister.json');
        // const result = this.http.post<JsonResult<Shiyebaoxianwengangfanhuan>>(url,
        //     {
        //         "bac001": bac001,
        //         "aae128": aae128
        //     }
        // );
        return result;
    }

    /**
     * 3.7:小微企业担保贷款查询
     * @param bab001 单位编号
     * @param aab004 单位名称
     * @param aab998 统一信用代码
     * @returns 
     */
    public getXiaoweiqiyedanbaodaikuan(
        bab001: string,
        aab004: string,
        aab998: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/gettinybusiness`;
        const result = this.http.get<JsonResult<Xiaoweiqiyedanbaodaikuan>>('../../assets/data/comemployregister.json');
        // const result = this.http.post<JsonResult<Xiaoweiqiyedanbaodaikuan>>(url,
        //     {
        //         "bab001": bab001,
        //         "aab004": aab004,
        //         "aab998": aab998
        //     }
        // );
        return result;
    }

    /**
     * 3.8:创业孵化基地查询
     * @param aab004 单位名称
     * @returns 
     */
    public getChuangyefuhuajidi(
        aab004: string
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getincubationsubsidies`;
        const result = this.http.get<JsonResult<Chuangyefuhuajidi>>('../../assets/data/comemployregister.json');
        // const result = this.http.post<JsonResult<Chuangyefuhuajidi>>(url,
        //     {
        //         "aab004": aab004,
        //     }
        // );
        return result;
    }

    /**
     * 3.9:就业援助查询
     * @param aac003 姓名（必填）
     * @param aac147 身份证号（必填）
     * @param aac004 
     * @param aac006 
     * @param aac009 
     * @param bac301 
     * @param aac010 
     * @param bcca13 
     * @param acc612 
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getJiuyeyuanzhu(
        aac003: string,
        aac147: string,
        aac004: string,
        aac006: string,
        aac009: string,
        bac301: string,
        aac010: string,
        bcca13: string,
        acc612: string,
        pageNo: number,
        pageSize: number

    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getemployassistance`;
        const result = this.http.get<JsonResult<PagedList<Jiuyeyuanzhu>>>('../../assets/data/renyuanjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Jiuyeyuanzhu>>>(url,
        //     {
        //         "aab004": aab004,
        //     }
        // );
        return result;
    }

    /**
     * 3.10:灵活就业人员社保补贴查询
     * @param bac001 
     * @param aac003 
     * @param aac147 
     * @param aae036 
     * @param abc921 
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getLinghuojiuyerenyuanshebaobutie(
        bac001: string,
        aac003: string,
        aac147: string,
        aae036: string,
        abc921: string,
        pageNo: number,
        pageSize: number

    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getflexemploy`;
        const result = this.http.get<JsonResult<PagedList<Linghuojiuyerenyuanshebaobutie>>>('../../assets/data/renyuanjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Linghuojiuyerenyuanshebaobutie>>>(url,
        //     {
        //         "bac001": bac001,
        //     }
        // );
        return result;
    }

    /**
     * 
     * @param bab001 单位唯一识别码
     * @param aab004 
     * @param aab998 
     * @param bac001 个人编号
     * @param aae036 
     * @param abc921 
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getDanWeiXiNaJiuYeKunNanRenYuanSheBaoBuTie(
        bab001: string,
        aab004: string,
        aab998: string,
        bac001: string,
        aae036: string,
        abc921: string,
        pageNo: number,
        pageSize: number

    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getemploydifficult`;
        const result = this.http.get<JsonResult<PagedList<DanWeiXiNaJiuYeKunNanRenYuanSheBaoBuTie>>>('../../assets/data/DanWeiXiNaJiuYeKunNanRenYuanSheBaoBuTie.json');
        // const result = this.http.post<JsonResult<PagedList<DanWeiXiNaJiuYeKunNanRenYuanSheBaoBuTie>>>(url,
        //     {
        //         "bab001": bab001,
        //         "bac001": bac001
        //     }
        // );
        return result;
    }
}
