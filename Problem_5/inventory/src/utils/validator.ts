import BadRequestError from "../errors/badRequest";

class Validate {
  private value: number | string | object | boolean;
  private name: string
  private error: string | null | Error;

  constructor( value: number | string, name: string) {
    this.value = value;
    this.name = name;
    this.error = null;
  }

  /* --- Set and return errors ---*/
  // set content of error to errPtr for system log
  hasError(errPtr: { error: Error | null } | null) {
    if (errPtr) {
      // eslint-disable-next-line no-param-reassign
      errPtr.error = new BadRequestError(this.error as string);
    }
    return this.error;
  }

  /* --- Validate number --- */
  isNumber(){
    // return first meeting error
    if( this.error ){
      return this;
    }
    if ( typeof this.value !== 'number' || Number.isNaN(this.value)){
      this.error = `'${this.name}' must be an number`;
    }
    return this;
  }

  isInteger() {
    if (this.error) {
      return this;
    }
    if (!Number.isSafeInteger(this.value)) {
      this.error = `'${this.name}' must be an integer`;
    }
    return this;
  }

  withMinValue(min: number) {
    if (this.error) {
      return this;
    }
    if (Number(this.value) < min) {
      this.error = `'${this.name}' must be at least ${min}`;
    }
    return this;
  }

  withMaxValue(max: number) {
    if (this.error) {
      return this;
    }
    if (Number(this.value) > max) {
      this.error = `'${this.name}' must be at most ${max}`;
    }
    return this;
  }

  /* --- Validate strings --- */
  isString() {
    if (this.error) {
      return this;
    }
    if (typeof this.value !== 'string') {
      this.error = `'${this.name}' must be a string`;
    }
    return this;
  }

  isNonEmptyString() {
    if (this.error) {
      return this;
    }
    if (typeof this.value !== 'string') {
      this.error = `'${this.name}' must be a string`;
    } else if (this.value.length < 1) {
      this.error = `'${this.name}' must be a non-empty string`;
    }
    return this;
  }

  withExactLength(len: number) {
    if (this.error) {
      return this;
    }
    if (String(this.value).length !== len) {
      this.error = `'${this.name}' must be of length ${len}`;
    }
    return this;
  }

  withMinLength(min: number) {
    if (this.error) {
      return this;
    }
    if (String(this.value).length < min) {
      this.error = `'${this.name}' must be at least of length ${min}`;
    }
    return this;
  }

  withMaxLength(max: number) {
    if (this.error) {
      return this;
    }
    if (String(this.value).length > max) {
      this.error = `'${this.name}' must be at most of length ${max}`;
    }
    return this;
  }

  /* --- Validate boolean --- */
  isBoolean() {
    if (this.error) {
      return this;
    }
    if (Boolean(this.value) !== true && Boolean(this.value) !== false) {
      this.error = `'${this.name}' must be a boolean`;
    }
    return this;
  }

  /* --- Validate object --- */
  isObject() {
    if (this.error) {
      return this;
    }
    if (typeof this.value !== 'object' || this.value === null) {
      this.error = `'${this.name}' must be an objects`;
    }

    return this;
  }
}

export default Validate;