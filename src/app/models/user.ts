export class User {
  constructor() {
    this.Id = null;
    this.Password = '';
    this.Name = '';
    this.Email = '';
    this.Phone = '';
    this.confirmPassword='';
  }
  Id: string | number;
  Password: string;
  Name: string;
  Email: string;
  Phone: string;
  confirmPassword:string;
}
