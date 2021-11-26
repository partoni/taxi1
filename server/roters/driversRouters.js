const{Router}  = require('express')
let router = new Router()
const driverApi = require('../controllers/driversControllers')


router.get( "/",driverApi.getDrivers)
router.get("/driver/:id",driverApi.getDriver)
module.exports = router