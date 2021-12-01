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
      email: 'required|email|unique:users,email|min:10|max:254',
      username: 'required|string|unique:users,username',
      password: 'required|min:8|max:16'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = register
