'use strict'
const ArgsFormatters = use('App/Utils/ArgsFormatter')
class user {
  get rules () {
    return {
      email: 'required|email|min:10|max:254',
      password: 'required|min:8|max:16'
    }
  }
  get validateAll(){
    return true
  }
  get formater(){
    return ArgsFormatters
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = user
