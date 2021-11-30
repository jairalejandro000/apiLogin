'use strict'

const UserController = require("./UserController")

class AuthController {

    async logIn({request, auth, response}){
        const user = await User.findBy('email', email)
        const isSame = await Hash.verify(password, user.password)
        if(isSame){
            const token = await auth.attempt(email, password)
            return response.ok({message:'Succesful logIn', token})
         }
    }
}

module.exports = AuthController
