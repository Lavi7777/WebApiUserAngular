export class User {
  constructor() {
    this.Id = null;
    this.Password = '';
    this.Name = '';
    this.Email = '';
    this.Phone = '';
  }
  Id: string | number;
  Password: string;
  Name: string;
  Email: string;
  Phone: string;
}
