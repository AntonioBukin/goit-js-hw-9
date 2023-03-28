// const Joi = require('joi');

// const passwordSchema = Joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate('q'));

const sum = (a, b) => a + b;
sum(2, 5);
class Hero {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}
const h = new Hero('mango');