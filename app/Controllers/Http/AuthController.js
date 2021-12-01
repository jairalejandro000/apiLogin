'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')

class AuthController {

    async logIn({request, auth, response}){
        await auth.logout()
        /*const userData = request.only(['email', 'password'])
        const U = await User.findBy('email', userData.email)
        const isSame = await Hash.verify(userData.password, U.password)
        if(isSame){
            const token = await auth.attempt(U.email, U.password)
            return response.ok({message:'Succesful logIn', token})
        }*/
    }
}

module.exports = AuthController
