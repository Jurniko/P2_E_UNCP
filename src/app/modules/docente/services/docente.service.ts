import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Room } from 'src/app/interfaces/room.interface';
import { Student } from 'src/app/interfaces/student.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  domain : string = environment.domain
  path = environment.path
  constructor(private httpCliente:HttpClient) { }


  //TOKEN
  getAllStudents(){
    return this.httpCliente.get<Student[]>(this.domain+this.path.teacher.student);
  }
//TOKEN
  getStudentsById(id:number){
    return this.httpCliente.get<Student>(this.domain+this.path.teacher.student+`${id}`);
  }
//TOKEN
  getAllRooms(){
    return this.httpCliente.get<Room[]>(this.domain+this.path.teacher.roomPlural);
  }
//TOKEN
  createRoom(room:Room){
    return this.httpCliente.post<Room>(this.domain+this.path.teacher.room,room)
  }
//TOKEN
  getRoomById(id:number){
    return this.httpCliente.get<Room>(this.domain+this.path.teacher.room+id)
  }
  //TOKEN
  editRoom(room:Room){
    return this.httpCliente.put<Room>(this.domain+this.path.teacher.roomUpdate,room)
  }

  detailsBlockStudent(statekey:string){
    return this.httpCliente.get(this.domain+this.path.teacher.problems+statekey)
  }

  chartIndividualStudent(student_id : string,attempt:string){
    return this.httpCliente.get(this.domain+this.path.teacher.chartIndividual+`${student_id}/${attempt}`)
  }

  chartGroupStudent(code_id:string){
    return this.httpCliente.get(this.domain+this.path.teacher.chartGroup+`${code_id}`)
  }

  downloadGroupExcelStudent(code_id:string){
    return this.httpCliente.get(this.domain+this.path.teacher.chartGroupExcel+`${code_id}`,{responseType:'blob'})
  }

  downloadStudentsExcel(){
    return this.httpCliente.get(this.domain+this.path.teacher.studentsExcel,{responseType:'blob'})
  }
}
