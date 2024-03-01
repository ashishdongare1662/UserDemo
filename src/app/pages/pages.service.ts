import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  users: any[] = [];
  constructor() {
  }

  addEmployee(user: any): Observable<any> {
    var result: any = {};

    var existUser = this.users.find(f => f.Email === user.Email);
    if (existUser != null && existUser != undefined) {
      result = { Status: 2, Message: "Already exists." }
    }
    else {
      this.users.push(user);
      result = { Status: 1, Message: "User added successfully." }
    }

    return of(result);
  }

  getEmployees(): Observable<any> {
    return of(this.users);
  }

  getEmployee(email: string): Observable<any> {
    return of(this.users.find(u => u.Email == email));
  }

  updateUser(user: any): Observable<any> {
    var result: any = {};
    var existUser: any = this.users.find(a => a.Email == user.Email);
    if (existUser != null && existUser != undefined) 
    {
      existUser.FirstName = user.FirstName;
      existUser.LastName = user.LastName;
      existUser.Address = user.Address;
      existUser.PhoneNo = user.PhoneNo;
      result = { Status: 1, Message: "User updated successfully." }
    }
    else {
      result = { Status: 2, Message: "User not updated." }
    }

    return of(result);

  }

  deleteEmployee(user: any): Observable<any> {
    var result:any = {}; 
    const index: number = this.users.indexOf(user);
    if (index !== -1) {
        this.users.splice(index, 1);
        result =  result = { Status: 1, Message: "User delted successfully." }
    } 
    else
    {
      result = { Status: 2, Message: "User not deleted." }
    }
    return of(result);    
  }
}
