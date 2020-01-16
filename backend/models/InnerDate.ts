import { Attributes } from '../commons/Helpers';

class InnerDate {
  Day!: number;
  Month!: number;
  Year!: number;
  _isValidDate: boolean;

  constructor(fullDate?: any) {
    this._isValidDate = true;
    let datePart = Attributes.IsValid(fullDate) ? fullDate.split('-') : undefined;

    if (Attributes.IsValid(datePart)) {
      this.Year = datePart[0];
      this.Month = datePart[1];
      this.Day = datePart[2];
    } else {
      this._isValidDate = false;
    }
  }

  getFullDate() {
    return this._isValidDate ? `${this.Year}-${this.Month}-${this.Day}` : undefined;
  }

  Now() {
    let _date = new Date();
    this.Year = _date.getFullYear();
    this.Month = _date.getMonth() + 1;
    this.Day = _date.getDay();
    return this;
  }
}

export { InnerDate };