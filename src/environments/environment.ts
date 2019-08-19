// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  aws: {
    // настройки для авторизации
    Auth: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_MPvCeCJvh',
      userPoolWebClientId: '1sfp40ks5bvhi3j8kgga7gktd2'
    },
    // настроики для api
    API: {
      endpoints: [
        {
          name: 'tasks',
          endpoint: 'https://7vxy32ez3d.execute-api.us-east-1.amazonaws.com'
        }
      ]
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
