
export class UserProfile {
  Id: number = 0;
  UserName: string = '';
  Password: string = '';
  RealName: string = '';
  Address: string = '';
  Profile: string = '';
  Avatar: string = '';
  TelPhone: string = '';
  Email: string = '';
  InsertTime: Date = new Date('1970-1-1');
  DepartmentId: number = 0;
  DeptName: string = '';
  Country: string = '';
  Province: string = '';
  City: string = '';

  constructor() { }
}
