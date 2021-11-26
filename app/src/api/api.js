import * as axios from 'axios'

const instans = axios.create({
    baseURL:"/api"
})
export let usersApi={
   userStatus(user){
      return instans.post('/user',{name:user.name, password:user.password,role:"admin"})
   }
}

export let driversApi = {
    getDrivers(){
       return instans.get()
       
    },


    getDriver(id){
       return instans.get( `/driver/${id}`)
       
    },


    addDriver(driver){
       return instans.post("/add",{name:driver.name,auto:driver.auto})
       
    }
}