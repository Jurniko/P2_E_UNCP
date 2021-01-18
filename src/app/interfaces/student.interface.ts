import { School } from "./school.interface";

export interface Student{
  id?:number

  code_id?:number // Codigo de la sala

  enrollment_code?:string //codigo de estudiante

  nickname?:string //pseudonimo

  email?:string

  school_id?:number //facultad
  school?:School

  semester?:number //semestre

  created_at?:Date
  updated_at?:Date

}


