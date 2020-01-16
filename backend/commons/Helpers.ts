class Helpers{

}

class Attributes {

  static IsValid(value : any){
    let result = false;
    if (value != undefined && value != '' && value != null) {
      result = true;
    }
    return result;
  }

  static ReturnIfValid(value : any){
    let result = undefined;
    if (value != undefined && value != '' && value != null) {
      result = value;
    }
    return result;
  }
  
}

class InnerJson{
  static IsValid(json : any, requiredAttributes : string []){
    let result = false;
    let count = 0;
    if (json != undefined && json != '' && json != null) {
      result = true;
    }
    requiredAttributes.forEach(element => {
      if(json.hasOwnProperty(element)){
        result = true;
        count ++;
      }
    });
    if(count <= 0) result = false;

    return result;
  }
}

export { Helpers, Attributes, InnerJson }