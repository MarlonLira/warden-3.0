function ReturnIfValid(value){
  let result = null;
  if (value != undefined && value != '' && value != null) {
    result = value;
  }
  return result;
}

function ReturnIfValid(value, defaultValue){
  let result = defaultValue;
  if (value != undefined && value != '' && value != null) {
    result = value;
  }
  return result;
}

export { ReturnIfValid };