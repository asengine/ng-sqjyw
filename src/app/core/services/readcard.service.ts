import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RDC_URL } from '../config/service.config';
import { SettingsService } from '@delon/theme';

@Injectable()
export class ReadCardService {

    apiUrl = 'api/readcard';

    constructor(
        private http: HttpClient,
        public settings: SettingsService,
        @Inject(RDC_URL) private baseUrl: string
    ) {

    }

    readIdCard() {
        const url = `${this.baseUrl}api/ReadMsg`;
        const result = this.http.jsonp<any>(url, 'callback');
        return result;
    }

    readSiCard() {
        const url = `${this.baseUrl}${this.apiUrl}/si`;
        const result = this.http.get<string>(url);
        return result;
    }
}
