import { Logs } from "./logs.interface";
import { Student } from "./student.interface";

export interface Report{
  student:Student

  level_1_keys:string[]
  level_1:{}

  level_2_keys:string[]
  level_2:{}

  level_3_keys:string[]
  level_3:{}
}

export interface BodyReportLevel extends Logs{
  score: number
  started_at:Date
}
