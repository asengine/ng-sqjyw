import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AuthGuard } from './shared/guard';
import { JYW_URL, RSJ_URL, RDC_URL, AUTH_URL, IDC_URL } from './core/config/service.config';
import { environment } from 'src/environments/environment';

registerLocaleData(zh);

// #region Http Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from './core/net/default.interceptor';
import { HtmlPipe } from './core/providers/html.pipe';

const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    HtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    ...INTERCEPTOR_PROVIDES,
    AuthGuard,
    { provide: AUTH_URL, useValue: environment.AUTH_URL },
    { provide: JYW_URL, useValue: environment.JYW_URL },
    { provide: RSJ_URL, useValue: environment.RSJ_URL },
    { provide: RDC_URL, useValue: environment.RDC_URL },
    { provide: IDC_URL, useValue: environment.IDC_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
