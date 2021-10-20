import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  saveStudent(student:student){
    return this.http.post(`https://admin-portal-node.herokuapp.com//students`,student)
  }

  getAllUser(){
    return this.http.get<Array<student>>(`https://admin-portal-node.herokuapp.com//students`)
  }

  getUserByID(id:number){
    return this.http.get<student>(`https://admin-portal-node.herokuapp.com//students/${id}`)
  }

  updateUserById(userId:number,userdata:student){
    return this.http.put(`https://admin-portal-node.herokuapp.com//students/${userId}`,userdata)
  }

  deleteUserById(id:number){
    return this.http.delete(`https://admin-portal-node.herokuapp.com//students/${id}`)
  }
}