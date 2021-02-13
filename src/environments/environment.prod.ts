export const environment = {
  production: false,
  domain:"https://uncp.cunasoft.com/laravel/api/v1/",
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
        roomUpdate:"teacher/room/update/",
        problems:"teacher/problems/",
        chartIndividual:"teacher/ichart/",
        chartGroup:"teacher/gchart/",
        chartGroupExcel:"teacher/gchartexcel/",
        studentsExcel:"teacher/studentexcel"

      },
  }
};
