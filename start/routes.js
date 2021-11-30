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

//Route.on('/').render('welcome')

Route.group(() =>{
    Route.get('/show', 'UserController.getUsers')
    Route.get('/show/:id', 'UserController.getUser')
    //Route.post('/create', 'UserController.createUser').validator('user')
}).prefix('/user').middleware(['auth:jwt'])

Route.group(() =>{
    Route.post('/logIn', 'AuthController.logIn').validator('register')
}).prefix('/Auth').middleware(['auth:jwt'])

Route.post('/create', 'UserController.createUser').validator('user')