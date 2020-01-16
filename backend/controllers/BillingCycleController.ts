import { Sequelize } from 'sequelize';
import { Op } from 'sequelize';

import IEntitie from '../interfaces/IEntitie';
import { BillingCycle } from '../models/BillingCycle';
import { HttpCode } from '../commons/enums/Http';
import { GetHttpMessage } from '../commons/functions/Http';
import { Attributes } from '../commons/Helpers';
import { InnerDate }from '../models/InnerDate';

export default class BillingCycleController extends BillingCycle implements IEntitie {
  Save(response?: any) {
    var _date = this.date.FullDate;
    console.log(typeof(this.test));
    console.log(this.test);
    return new Promise((resolve, reject) => {
      console.log(this.test);
      BillingCycle.create({
        teste: Attributes.ReturnIfValid(this.test),
        credit: Attributes.ReturnIfValid(this.credit),
        debit: Attributes.ReturnIfValid(this.debit),
        date: this.test
      }).then(result => {
        response.status(HttpCode.Ok).send(GetHttpMessage(HttpCode.Ok, null, result));
        resolve(result);
      }).catch(error => {
        console.error(error.message);
        resolve(response.status(HttpCode.Internal_Server_Error).send(GetHttpMessage(HttpCode.Internal_Server_Error)));
      })
    })
  }

  Search(response?: any, isAll?: boolean) {
    let date = new InnerDate().Now();
    let query: any = {};
    console.log(date);

    if(!isAll){
      query.attributes = [
        [Sequelize.fn('SUM', Sequelize.col('credit')), 'credit'], 
        [Sequelize.fn('SUM', Sequelize.col('debit')), 'debit']
      ];
      query.where = {
        date:{
          [Op.like]: `${date.Year}-${date.Month}%`     
        }
      }
    }

    return new Promise((resolve, reject) => {
      BillingCycle.findAll(query)
        .then(result => {
          if (result != null && result != undefined){
            response.status(HttpCode.Ok).send(result);
            resolve(result);
          }
          else{
            resolve(response.status(HttpCode.Not_Found).send(GetHttpMessage(HttpCode.Not_Found)));
          }
          resolve(result);
        }).catch(error => {
          console.error(error)
          resolve(response.status(HttpCode.Internal_Server_Error).send(GetHttpMessage(HttpCode.Internal_Server_Error)));
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