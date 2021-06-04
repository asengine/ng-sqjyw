import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RDC_URL, IDC_URL } from '../config/service.config';
import { CardInfo } from '@core/models/card-info';

/**
 * 读卡器服务
 */
@Injectable()
export class ReadCardService {

    constructor(
        private http: HttpClient,
        @Inject(RDC_URL) private rdcUrl: string,
        @Inject(IDC_URL) private idcUrl: string
    ) {

    }

    /**
     * 读身份证
     * @returns CardInfo
     */
    readIdCard() {
        const url = `${this.idcUrl}/api/ReadMsg`;
        const result = this.http.jsonp<CardInfo>(url, 'callback');
        return result;
    }

    /**
     * 读社保卡
     * @returns string
     */
    readSiCard() {
        const url = `${this.rdcUrl}/api/readcard`;
        const result = this.http.get<string>(url);
        return result;
    }
}
