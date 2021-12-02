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
        if(user != null){
            return response.ok({message: 'User was found', user})
        }else{
            return response.status(200).json({message:'User was not found'})
        }
    }
    async getUsers({response}){
        const users = await User.all()
        if(users != null){
            return response.ok({users})
        }else{
            return response.status(200).json({message:'Empty table'})
        }
    }
    async helloWolrd({response}){
        return response.ok({message: 'hello World'})
    }
}

module.exports = UserController


