import IAuthSecurity from '../interfaces/IAuthSecurity';
import { Auth } from '../models/Auth';
import { Op } from 'sequelize';
import { HttpCode } from '../commons/enums/Http';
import { GetHttpMessage } from '../commons/functions/Http';
import { Attributes, Querying, Crypto } from '../commons/Helpers';
import UserController from '../controllers/UserController';

class AuthController extends Auth implements IAuthSecurity {

  TokenValidate(response?: any) {
    throw new Error("Method not implemented.");
  }

  TokenGeneration(response?: any) {
    throw new Error("Method not implemented.");
  }

  SignIn(response?: any) {
    return new Promise((resolve, reject) => {
      let query: any;
      // query.status = 1;
      // if (Attributes.IsValid(this.user.registryCode)) {
      //   query.registryCode = this.user.registryCode;
      // } else {
      //   query.email = this.user.email;
      // }
      // console.log(query);

      UserController.findOne({
        where: {
          registryCode: this.user.registryCode
        }
      }).then(result => {
        if (Attributes.IsValid(result)) {
          let _result = Crypto.Compare(this.user.password, result.password);
          console.log(_result)
          if (_result) {
            resolve(result);
            response.status(HttpCode.Ok).send(GetHttpMessage(HttpCode.Ok, Auth, result));
          }
          else {
            resolve(false)
            response.status(HttpCode.Unauthorized).send(GetHttpMessage(HttpCode.Unauthorized, Auth, 'Unauthorized'));
          }
        } else {
          resolve(false)
          response.status(HttpCode.Unauthorized).send(GetHttpMessage(HttpCode.Unauthorized, Auth, 'Unauthorized'));
        }
      }).catch(error => {
        resolve(response.status(HttpCode.Internal_Server_Error).send(GetHttpMessage(HttpCode.Internal_Server_Error, Auth, error)));
      })
    })
  }

  SignUp(response?: any) {
    throw new Error("Method not implemented.");
  }

}

export default AuthController;