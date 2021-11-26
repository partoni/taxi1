import React from "react";
import { Driver } from "./Driver";
import { driversApi } from "../../api/api";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setDriverAc } from "../../redux/driversReduser";

class DriverConteiner extends React.Component{

    componentDidMount(){
        driversApi.getDriver(this.props.match.params.driverId)
        .then(driver=>this.props.setDriverAc(driver.data))
    }
    render(){
       debugger;
        return(
            <Driver {...this.props}/>
        )
    }
        
    
}
const mapStateToProps = (state)=>({
    driver: state.driversPage.driver
})
export default connect(mapStateToProps,{setDriverAc})(withRouter(DriverConteiner))