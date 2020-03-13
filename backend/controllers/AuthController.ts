import IAuthSecurity from '../interfaces/IAuthSecurity';
import { Auth } from '../models/Auth';
import { Op } from 'sequelize';
import { HttpCode } from '../commons/enums/Http';
import { GetHttpMessage } from '../commons/functions/Http';
import { Attributes, Querying, Crypto } from '../commons/Helpers';
import UserController from '../controllers/UserController';

const jwt = require('jsonwebtoken');

class AuthController extends Auth implements IAuthSecurity {

  TokenValidate(response?: any) {
    return new Promise((resolve, reject) => {
      let token = this.token || '';
      resolve(
        jwt.verify(token, process.env.SECRET, (err, decoded) =>
          response.status(200).send({ valid: !err }))
      );
    })
  }

  TokenGeneration(response?: any) {
    throw new Error("Method not implemented.");
  }

  SignIn(response?: any) {
    return new Promise((resolve, reject) => {
      let query: any = {};
      query.status = 1;
      if (Attributes.IsValid(this.user.registryCode)) {
        query.registryCode = {
          [Op.eq]: this.user.registryCode
        };
      } else {
        query.email = {
          [Op.eq]: this.user.email
        };
      }
      UserController.findOne({
        where: query
      }).then(result => {
        if (Attributes.IsValid(result) && Crypto.Compare(this.user.password, result.password)) {
          
          let id = result.id;
          let name = result.name;
          
          //Geração do Token de acesso
          const token = jwt.sign({ id, name }, process.env.SECRET, {
            expiresIn: "1h"
          });

          //objeto Json
          let _result = {
            "token": token,
            "name": result.name,
            "email": result.email,
          }

          resolve(_result);
          response.status(HttpCode.Ok).send(GetHttpMessage(HttpCode.Ok, Auth, _result));
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