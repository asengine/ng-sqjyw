import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RDC_URL, IDC_URL } from '../config/service.config';
import { SettingsService } from '@delon/theme';

@Injectable()
export class ReadCardService {

    constructor(
        private http: HttpClient,
        public settings: SettingsService,
        @Inject(RDC_URL) private rdcUrl: string,
        @Inject(IDC_URL) private idcUrl: string
    ) {

    }

    readIdCard() {
        const url = `${this.idcUrl}/api/ReadMsg`;
        const result = this.http.jsonp<any>(url, 'callback');
        return result;
    }

    readSiCard() {
        const url = `${this.rdcUrl}/api/readcard`;
        const result = this.http.get<string>(url);
        return result;
    }
}
