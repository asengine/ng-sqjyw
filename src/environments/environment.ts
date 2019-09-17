// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  SERVER_URL: `./`,
  production: false,
  AUTH_URL: 'http://localhost:8015/',//本地身份认证接口服务
  RSJ_URL: 'http://localhost:8016/',//远程人社局接口服务
  JYW_URL: 'http://localhost:8017/',//远程就业网接口服务
  RDC_URL: 'http://localhost:8018/' //本地读卡器服务
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
