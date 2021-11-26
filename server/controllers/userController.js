const db = require('../db')

const userController = {
    async login(req,res){
        try{
        let {name, password, role} = req.body
        const user = await db.query(`INSERT INTO users(name,password,role) values($1,$2,$3)`,[name,password,role])
        res.send(user.rows)}
        catch(error){
            res.status(500),json(error.message)
        }
    }
}