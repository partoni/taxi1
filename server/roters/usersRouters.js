const {Router}=require('express')
const router = new Router()

router.post('/user',userController.login())

module.exports = router