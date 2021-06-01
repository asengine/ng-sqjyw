export class TokenObj {
  id: number = 0;
  access_token: string = '';
  email: string = '';
  userName: string = '';
  realName: string = '';
  token_type: string = '';
  expires_in: number = 0;
  message: string = '';
  success: boolean = false;
  expires: Date = new Date('1970-1-1');
  avatar: string = '';

  constructor() { }
}
