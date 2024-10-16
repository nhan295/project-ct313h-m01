const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()


module.exports.setup = (app) => {
    
    app.use('/api/v1/users', router)

    // Sign up api routes
    router.post('/signup', userController.signup)

    // Sign iyn api routes
    router.post('/signin', userController.signin)

    // Log out api routes
    router.post('/logout', userController.logout)

    // Get user data api routes
    router.get('/', userController.userData)

}
