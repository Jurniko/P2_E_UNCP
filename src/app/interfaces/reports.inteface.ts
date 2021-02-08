import { Attempts } from "./attempts.interface";
import { Logs } from "./logs.interface";
import { Student } from "./student.interface";

export interface Report{
  student:Student
  attempts:AttemptReport[]
  }

export interface AttemptReport extends Attempts{
  level_1:BodyReportLevel[]

  level_2:BodyReportLevel[]


  level_3:BodyReportLevel[]


}

export interface BodyReportLevel extends Logs{
  score: number
  started_at:Date
}
