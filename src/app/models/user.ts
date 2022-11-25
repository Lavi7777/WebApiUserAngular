import { ReplaySubject } from 'rxjs';

export class User {
  constructor() {
    this.Id = null;
    this.Password = '';
    this.Name = '';
    this.Email = '';
    this.Phone = '';
    this.Role=2;
    this.confirmPassword='';
  }
  Id: string | number;
  Password: string;
  Name: string;
  Email: string;
  Phone: string;
  Role:number|string;
  confirmPassword:string;
}


