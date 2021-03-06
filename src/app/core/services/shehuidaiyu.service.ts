import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../config/service.config';
import { JsonResult } from '@core/models/json-result';
import { PersonId } from '@core/models/personid';
import { Yaopin } from '@core/models/shehuidaiyu/yaopin';
import { PagedList } from '@core/models/paged-list';
import { Zhenliao } from '@core/models/shehuidaiyu/zhenliao';
import { Cailiao } from '@core/models/shehuidaiyu/cailiao';
import { Gongshangjiben } from '@core/models/shehuidaiyu/gongshangjiben';
import { Gongshangdaiyu } from '@core/models/shehuidaiyu/gongshangdaiyu';
import { Gongshangdingqidaiyu } from '@core/models/shehuidaiyu/gongshangdingqidaiyu';
import { Gongshanggongyang } from '@core/models/shehuidaiyu/gongshanggongyang';
import { Gongshangdaiyushouli } from '@core/models/shehuidaiyu/gongshangdaiyushouli';
import { Qiyelituixiu } from '@core/models/shehuidaiyu/qiyelituixiu';
import { Yanglaojin } from '@core/models/shehuidaiyu/yanglaojin';
import { Gongyangjiben } from '@core/models/shehuidaiyu/gongyangjiben';
import { Bukoufa } from '@core/models/shehuidaiyu/bukoufa';
import { Gerenfafang } from '@core/models/shehuidaiyu/gerenfafang';
import { Daiyufafang } from '@core/models/shehuidaiyu/daiyufafang';
import { Tuixiugongzi } from '@core/models/shehuidaiyu/tuixiugongzi';

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
     * @param ala002 药品商品名编码（必须）
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
        // const result = this.http.post<JsonResult<Yaopin>>(url,
        //     {
        //         "ala002": ala002,
        //         "ala010": ala010,
        //         "ala012": ala012,
        //         "ala011": ala011,
        //         "ala016": ala016,
        //         "ala003": ala003,
        //         "ala006": ala006,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.2	诊疗项目信息查询
     * @param ala095 材料编码（必须）
     * @param ala096 材料名称
     * @param ala024 收费类别
     * @param ala008 拼音助记码
     * @param ala009 五笔助记码
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getZhenliao(
        ala095: string,
        ala096: string,
        ala024: string,
        ala008: string,
        ala009: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getzhenliao`;
        const result = this.http.get<JsonResult<PagedList<Zhenliao>>>('../../assets/data/zhenliao.json');
        // const result = this.http.post<JsonResult<Zhenliao>>(url,
        //     {
        //         "ala095": ala095,
        //         "ala096": ala096,
        //         "ala024": ala024,
        //         "ala008": ala008,
        //         "ala009": ala009.
        //         "pageNo": pageNo.
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.3	材料信息查询
     * @param ala059 材料编码
     * @param ala060 材料名称
     * @param ala024 收费类别
     * @param ala008 拼音助记码
     * @param ala009 五笔助记码
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getCailiao(
        ala059: string,
        ala060: string,
        ala024: string,
        ala008: string,
        ala009: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getcailiao`;
        const result = this.http.get<JsonResult<PagedList<Cailiao>>>('../../assets/data/cailiao.json');
        // const result = this.http.post<JsonResult<Cailiao>>(url,
        //     {
        //         "ala059": ala059,
        //         "ala060": ala060,
        //         "ala024": ala024,
        //         "ala008": ala008,
        //         "ala009": ala009.
        //         "pageNo": pageNo.
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.4	工伤基本信息查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getGongshangjiben(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getgongshangjiben`;
        const result = this.http.get<JsonResult<PagedList<Gongshangjiben>>>('../../assets/data/gongshangjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Gongshangjiben>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.5	工伤待遇支付明细查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getGongshangdaiyu(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getgongshangdaiyu`;
        const result = this.http.get<JsonResult<PagedList<Gongshangdaiyu>>>('../../assets/data/gongshangjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Gongshangdaiyu>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.6	工伤定期待遇信息查询
     * @param bac001 
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getGongshangdingqidaiyu(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getgongshangdingqidaiyu`;
        const result = this.http.get<JsonResult<PagedList<Gongshangdingqidaiyu>>>('../../assets/data/gongshangjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Gongshangdingqidaiyu>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.7	工伤供养亲属待遇信息查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getGongshanggongyang(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getgongshanggongyang`;
        const result = this.http.get<JsonResult<PagedList<Gongshanggongyang>>>('../../assets/data/gongshangjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Gongshanggongyang>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.8	工伤待遇受理信息查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getGongshangdaiyushouli(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getgongshangdaiyushouli`;
        const result = this.http.get<JsonResult<PagedList<Gongshangdaiyushouli>>>('../../assets/data/gongshangjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Gongshangdaiyushouli>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.9	企业离退休人员查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getQiyelituixiu(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getqiyelituixiu`;
        const result = this.http.get<JsonResult<PagedList<Qiyelituixiu>>>('../../assets/data/gongshangjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Qiyelituixiu>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.10	养老金调整情况查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getYanglaojin(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getyanglaojin`;
        const result = this.http.get<JsonResult<PagedList<Yanglaojin>>>('../../assets/data/gongshangjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Yanglaojin>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.11	供养基本情况查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getGongyangjiben(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getgongyangjiben`;
        const result = this.http.get<JsonResult<PagedList<Gongyangjiben>>>('../../assets/data/gongshangjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Gongyangjiben>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.12	补扣发查询
     * @param bac001 个人编号
     * @param bic215 补扣发类别
     * @param aae002 结算期
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getBukoufa(
        bac001: string,
        bic215: string,
        aae002: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getbukoufa`;
        const result = this.http.get<JsonResult<PagedList<Bukoufa>>>('../../assets/data/gongshangjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Bukoufa>>>(url,
        //     {
        //         "bac001": bac001,
        //         "bic215": bic215,
        //         "aae002": aae002,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.13	个人发放信息变更查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getGerenfafang(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getgerenfafang`;
        const result = this.http.get<JsonResult<PagedList<Gerenfafang>>>('../../assets/data/gongshangjiben.json');
        // const result = this.http.post<JsonResult<PagedList<Gerenfafang>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.14	待遇发放信息查询
     * @param bac001 个人编号
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getDaiyufafang(
        bac001: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getdaiyufafang`;
        const result = this.http.get<JsonResult<PagedList<Daiyufafang>>>('../../assets/data/daiyufafang.json');
        // const result = this.http.post<JsonResult<PagedList<Daiyufafang>>>(url,
        //     {
        //         "bac001": bac001,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }

    /**
     * 3.16	退休工资证明查询
     * @param bac001 个人编号
     * @param aae011 提交系统名称
     * @param pageNo 
     * @param pageSize 
     * @returns 
     */
    public getTuiXiuGz(
        bac001: string,
        aae011: string,
        pageNo: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/getTuiXiuGz`;
        const result = this.http.get<JsonResult<PagedList<Tuixiugongzi>>>('../../assets/data/tuixiugongzi.json');
        // const result = this.http.post<JsonResult<PagedList<Tuixiugongzi>>>(url,
        //     {
        //         "bac001": bac001,
        //         "aae011": aae011,
        //         "pageNo": pageNo,
        //         "pageSize": pageSize
        //     }
        // );
        return result;
    }
}
