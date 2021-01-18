export interface Questions{
  id?:number
  problem_id?:number
  question?:string //la pregunta ¿?
  value?:number //Nota
  alternatives: Alternatives[]
}

export interface Alternatives{
  id?:number
  question_id?:number
  is_correct?:boolean
  alternative?:string
}
