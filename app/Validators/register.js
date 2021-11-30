'use strict'
const ArgsFormatters = use('App/Utils/ArgsFormatter')
class register {
  get formater(){
    return ArgsFormatters
  }
  get validateAll(){
    return true
  }
  get rules () {
    return {
      email: 'required|email|min:10|max:254',
      password: 'required|min:8|max:16'
    }
  }
}

module.exports = register
