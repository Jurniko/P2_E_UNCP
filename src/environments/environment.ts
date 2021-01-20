// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  domain:"https://cunasoft.com/FIS/quizzapp/api/v1/",
  path:{

      student:{
        p:"student/",
        verify:"student/verify/",
        max_level:"student/max_level/",
        logs:"student/log/", //POST
        progress:"student/progress/",//POST -- cuando entra en el nivel., ve si ya resolvio el bloque 1.
        result:"student/results/",
        info:"student/info/",
        logout:"student/logout",
        login:"student/login",
        register:"student/signup/", //POST,
        problem:"student/problem/",

        room:"student/room/"

      },
      school:{
        p:"schools/"
      },
      teacher:{
        p:"teacher/",
        info:"teacher/info/",
        login:"teacher/login/",
        logout:"teacher/logout/",
        register:"teacher/signup/",
        student:"teacher/student/",
        // ============ //
        room:"teacher/room/",
        roomPlural:"teacher/rooms/",
        roomUpdate:"teacher/room/update/"
      },
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
