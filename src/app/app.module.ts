import { registerLocaleData } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AUTH_URL, IDC_URL, JYW_URL, RDC_URL, RSJ_URL } from './core/config/service.config';
import { DefaultInterceptor } from './core/net/default.interceptor';
import { HtmlPipe } from './core/providers/html.pipe';
import { AuthGuard } from './shared/guard';


registerLocaleData(zh);
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
    FormsModule,
    NgZorroAntdModule,
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
