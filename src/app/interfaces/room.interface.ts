export interface Room{
  id?:number

  code?:string

  description?:string

  enrollment_codes?:string[]

  total_students?:number // numero de invitados
  registered_students?:number //   numero de quieres ya se registraron

  created_at?:Date
}

