'use strict'
const ArgsFormatters = use('App/Utils/ArgsFormatter')
class user {
  get formater(){
    return ArgsFormatters
  }
  get validateAll(){
    return true
  }
  get rules () {
    return {
      email: 'required|email|unique:users.email|min:10|max:254',
      username: 'requiered|min:4|max:20',
      password: 'required|min:8|max:16'
    }
  }
}

module.exports = user
