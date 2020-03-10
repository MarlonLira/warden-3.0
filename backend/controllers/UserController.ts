import IEntitie from '../interfaces/IEntitie';
import { User } from '../models/User';
import { Op } from 'sequelize';
import { HttpCode } from '../commons/enums/Http';
import { GetHttpMessage } from '../commons/functions/Http';
import { Attributes, Querying } from '../commons/Helpers'

export default class UserController extends User implements IEntitie {
  Save(response?: any) {
    throw new Error("Method not implemented.");
  }
  Search(response?: any, isAll?: boolean) {
    console.log(this);
    return new Promise((resolve, reject) => {
      let query: any;
      if (!isAll) {
        if (this.id > 0) {
          query = Querying.ReturnEqualQuery(this, ['id']);
        }
        else  {
          query = Querying.ReturnLikeQuery(this, ['name', 'registryCode', 'password', 'email']);
        }
      }

      User.findAll({
        where: query
      })
        .then(result => {
          if (Attributes.IsValid(result) && Attributes.IsValid(result[0])) {
            resolve(response.status(HttpCode.Ok).send(result));
          }
          else {
            resolve(response.status(HttpCode.Not_Found).send(GetHttpMessage(HttpCode.Not_Found, User, '')));
          }
          resolve(result);
        }).catch(error => {
          console.error(error)
          resolve(response.status(HttpCode.Internal_Server_Error).send(GetHttpMessage(HttpCode.Internal_Server_Error, User, error)));
        });
    })
  }
  Update(response?: any) {
    throw new Error("Method not implemented.");
  }
  Delete(response?: any) {
    throw new Error("Method not implemented.");
  }
}