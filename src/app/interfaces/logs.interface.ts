import { Attempts } from "./attempts.interface";
import { Problem } from "./problem.interface";
import { Student } from "./student.interface";

/*
*  Logs almacena
*
*
*/

export interface Logs{
  id?:number

  student_id?:number

  student?:Student

  level_id?:number

  block_id?:number

  appreciation?:string

  problem_id?:number
  problem?:Problem

  duration?:number

  ppm? : number | null
  ppm_points? : number

  state_key : string // Key para agrupar dos bloques -- para el primer bloque se envia sin state_key / para el segundo se reutiliza nada más lo generado por el backend

  correct_questions_id?:string[] // todos los ids de las preguntas correctas.

  attempts:Attempts[]

  created_at?:Date
  updated_at?:Date

}
