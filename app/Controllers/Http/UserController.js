'use strict'
const User = use('App/Models/User')
const Database = use('Database')

class UserController {

    async createUser({response}){
        const user = await User.create({email,  username, password})
        return response.ok({message: 'User created succesful',user})
    }
    async getUser({params, response}){
        const user = await User.findBy('id', params.id)
        return response.ok({message: 'User was found', user})
    }
    async getUsers({response}){
        const users = await User.all()
        return response.ok({users})
    }
}

module.exports = UserController


