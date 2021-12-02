'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')

class AuthController {

    async logIn({request, auth, response}){
        const {email, password} = request.only(['email', 'password'])
        const U = await User.findBy('email', email)
        const isSame = await Hash.verify(password, U.password)
        if(isSame){
            const token = await auth.attempt(email, password)
            return response.ok({message:'Succesful logIn', username:U.username, token})
        }else{
            return response.status(200).json({message:'Wrong credentials'})
        }

    }
}

module.exports = AuthController
