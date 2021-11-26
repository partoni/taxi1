import React from "react";
import { Redirect } from "react-router-dom";

const withLoginRedirect =(Component)=>{
    class  loginRedirect extends React.Component {

        render() {
            if (!this.props.isAuth) return <Redirect to="/registration" />
            return <Component {...this.props} />
        }
    }
    return loginRedirect
}
export default withLoginRedirect
// class loginRedirect extends React.Component {
//     render() {
//         if (!this.props.isAuth) return <Redirect to="/registration" />
//         return <Component {...this.props} />
//     }
// }
// export default loginRedirect