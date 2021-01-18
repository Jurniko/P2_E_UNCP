import { Questions } from "./questions.interface";

export interface Problem{
  id?:number

  level_id?:number

  block_id?:number

  questions : Questions[]

  type?:string

  body?:string

  created_at?:Date
  updated_at?:Date

}
