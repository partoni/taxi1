const getDrivers= 'getDrivers';
const getDriver = 'getDriver';
const deleteDriver = 'deleteDriver';
const addDriver = 'addDriver';
const setDriver = 'setDriver'

const initionState = {
    drivers:[{name:'vova'}],
    driver:null,
    isAuth:false
}
const driversRedusers=(state=initionState,action)=>{
    let copyState = {...state}

    switch (action.type) {
        case getDrivers:
            copyState.drivers = action.drivers
            return copyState
        
        case addDriver:
            copyState.drivers = [...copyState.drivers,action.driver]
            return copyState
        case setDriver:
            debugger;
            copyState.driver = {...action.driver}
            return copyState

        case deleteDriver:
            
            return
    
        default:
            return copyState
    }
}
export let getDriversAc = (action)=>{
    
    return {
        type:getDrivers,
        drivers:[...action]
    }
}
export let newDriverAc = (action)=>{
    return{
        type:addDriver,
        driver:action
    }
}
export let addDriverAc = (action)=>{
    return{
        type:addDriver,
        driver:action
    }
}
export let setDriverAc = (action)=>{
    debugger;
    return{
        type:setDriver,
        driver:action[0]
    }
}
export default driversRedusers 