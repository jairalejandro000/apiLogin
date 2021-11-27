'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/prueba', 'UserController.prueba')
Route.group(() =>{
    Route.get('/show', 'UserController.createUser')
    Route.get('/show/:id', 'UserController.createUser')
    Route.post('/create', 'UserController.createUser')
    Route.put('/update/:id', 'UserController.createUser')
    Route.delete('/delete/:id', 'UserController.createUser')
})
