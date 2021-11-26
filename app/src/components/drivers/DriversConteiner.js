import { getDriversAc, addDriverAc } from "../../redux/driversReduser";
import { connect } from "react-redux";
import { Drivers } from "./drivers";
import loginRedirect from "../../hoc/loginRedirect"

let mapStateToProps =(state)=> {
    return{
        drivers:state.driversPage.drivers,
        isAuth: state.driversPage.isAuth
    }
}

const DriversLoginRedirect = loginRedirect(Drivers)
const DriversConteiner=connect(mapStateToProps,{getDriversAc, addDriverAc})(DriversLoginRedirect)

export default DriversConteiner