import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  saveStudent(student:student){
    return this.http.post(`http://localhost:3000/students`,student)
  }

  getAllUser(){
    return this.http.get<Array<student>>(`http://localhost:3000/students`)
  }

  getUserByID(id:number){
    return this.http.get<student>(`http://localhost:3000/students/${id}`)
  }

  updateUserById(userId:number,userdata:student){
    return this.http.put(`http://localhost:3000/students/${userId}`,userdata)
  }

  deleteUserById(id:number){
    return this.http.delete(`http://localhost:3000/students/${id}`)
  }
}