'use strict'

class UserController {

    async createUser({request, response}){
        return response.error().json({message:'Validation error'})
        const user = await User.create({})
        return response.ok({message:'User created succesful',user})
    }
    async getUser({params, response}){
        const User = await User.findById('id', params.id)
        return response.error().json({message:'User was not found'})
        return response.ok().json({User})
    }
    async getUsers({response}){
        const Users = await User.findAll()
        return response.status(200).json({message:''})
        return response.ok().json({message:'', Users})
    }
    async deleteUser({params, response }){
        const user = await User.findById(paramd.id)
        await user.delete
        return response.error().json({message:'User was not found'})
        return response.ok().json({message:'User was deleted', user})
    }
    /*async prueba({response}){
        return response.status(200).json({message:"sdlkfknsdkfl"});
    }*/
}

module.exports = UserController


