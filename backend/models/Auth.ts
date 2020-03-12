class Auth {

  token!: string;
  validated!: boolean;
  user!: any;

  constructor(json?: any) {
    this.token = json.token;
    this.user = json.user;
  }
}

export { Auth };
