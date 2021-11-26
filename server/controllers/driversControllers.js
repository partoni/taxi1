const db = require('../db')

class driversControllers {
    async getDrivers(req,res){
        console.log('пришел');
        try {
            const driver = await db.query('SELECT * from drivers')
                    
            res.send(driver.rows)
        } catch (error) {
            res.status(500).json(error.message)
        }
          }


    async getDriver(req,res){ 
        try {
            let id = req.params.id
            console.log(req)
            const driver = await db.query(`SELECT * from drivers where id= ${id}`)
            res.send(driver.rows)
        } catch (error) {
           res.stats(500).json(error)
        }
    }


    async addDriver(req,res){
        console.log('пришел новый');
        try {
            let {name,car} = req.body
            const driver = await db.query('INSERT INTO drivers(name,auto) values($1,$2,$3) RETURNING*',[name,car])
                    
            res.send(driver.rows)
        } catch (error) {
            res.status(500).json(error.message)
        }
          }
}
module.exports = new driversControllers()