export class ErrorHandlerService{
  // error: any;
  // errorData: any;
  // message = '';
  // fields: Array<any>;
  // messages: Array<string>;
  // formattedError: string[];
  // flash = false;
  // defaultInterval = 0;
  // flashInterval;

  constructor() {// private util: UtilityService
    this.error = null;
    this.message = '';
    this.flash = false;
    this.defaultInterval = 0;
  }

  setError(error) {
   const validator =  this.responseHasError(error);
   if (validator) {
    this.error = error;
    this.handleError();
    return true;
   }
   return false;
  }

  handleError() {
    let hasDetailedErrors = false;
    this.formattedError = [];
    this.fields = [];
    this.messages = [];
    this.errorData = this.error.data.errors;
    // tslint:disable-next-line:forin
    for (let key in this.errorData) {
      hasDetailedErrors = true;
      if (this.errorData.hasOwnProperty(key)) {
        this.message += ' ' + this.errorData[key];
        this.fields.push(key);
        this.messages.push(this.errorData[key]);
        this.formattedError.push(this.formatError(key, this.errorData[key]));
      }
    }
    if (!hasDetailedErrors) {
      this.message = `${this.error.message}`;
    }
  }

  getFields() {
    return this.fields;
  } // should return fields with error

  fieldHasError(key) {
    if (this.error.hasOwnProperty(key) || this.errorData.hasOwnProperty(key)) {
      return true;
    }
    return false;
  } // should return boolean if the supplied field is having error

  getErrors(flash) {
    if (flash) {
    this.setFlash(flash);
    }
    return this.formattedError;
  } // get and/or flashes all errors one after the other

  getError(field, flash) {
    if (flash) {
      this.setFlash(flash);
      }
    if (this.fieldHasError(field)) {
      return this.errorData[field];
    }
    return 'Invalid Field';
  } // get and/or flashes error of a particular field

  getMainError(flash) {
    if (flash) {
      this.setFlash(flash);
      }
    if (this.fieldHasError('message')) {
      return this.error.message;
     }
     return false;
  } // get and/or flashes the main generic error from an endpoint

  render(field) {
    if (this.fieldHasError(field)) {
      return this.formatError(field, this.error.message);
    }
  } // return html formatted code for displaying an error

  renderAll() {
    let output = '';
    this.formattedError.forEach(function (message) {
      output += ` ${message}`;
    })
    return output;
  } // return html formatted code for displaying all errors

  toString() {
    this.getMainError(false);
  } // return main generic error (this is to make sure former codes doesn't break

  setFlashInterval() {
    const current_interval = this.flashInterval;
    this.flashInterval += 3000;
    return current_interval;
  }

  setFlash(flash) {
    this.flash = flash;
  }

  formatError(error_key, message) {
    return `${error_key}: ${message}`;
  }
  responseHasError(error) {
    if (error.data.errors) {
      return true;
    }
    return false;
  }

}
