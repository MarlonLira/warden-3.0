import IAuthSecurity from '../interfaces/IAuthSecurity';
import { Auth } from '../models/Auth';
import { Op } from 'sequelize';
import { HttpCode } from '../commons/enums/Http';
import { GetHttpMessage } from '../commons/functions/Http';
import { Attributes, Querying } from '../commons/Helpers'

class AuthController implements IAuthSecurity {

  TokenValidate(response?: any) {
    throw new Error("Method not implemented.");
  }
  TokenGeneration(response?: any) {
    throw new Error("Method not implemented.");
  }
  SignIn(response?: any) {
    throw new Error("Method not implemented.");
  }
  SignUp(response?: any) {
    throw new Error("Method not implemented.");
  }

} 

export default AuthController;