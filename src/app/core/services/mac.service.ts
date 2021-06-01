import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenObj } from '../models/token';
import { RDC_URL } from '../config/service.config';

@Injectable({
    providedIn: 'root',
})
export class MacService {
    private apiUrl = '/api/mac';

    constructor(
        private http: HttpClient,
        @Inject(RDC_URL) private baseUrl: string
    ) { }

    getLocalMac(): Observable<string[]> {
        const url = `${this.baseUrl}${this.apiUrl}`;
        console.log(url);
        return this.http.get<string[]>(url);
    }

    getValues(){
        const url = `${this.baseUrl}api/values`;
        console.log(url);
        return this.http.get<string>(url);
    }
}
