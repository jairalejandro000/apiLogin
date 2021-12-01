'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {

    async createUser({request, response}){
        const userData = request.only(['email', 'username', 'password'])
        const user = await User.create(userData)
        return response.ok({message: 'User created succesful', user})
    }
    async getUser({params, response}){
        const user = await User.findBy('id', params.id)
        return response.ok({message: 'User was found', user})
    }
    async getUsers({response}){
        const users = await User.all()
        return response.ok({users})
    }
    async logIn({request, auth, response}){
        const {email, password} = request.only(['email', 'password'])
        const token = await auth.attempt(email, password)
        return response.ok({message:'Succesful logIn', token})
    }
}

module.exports = UserController


