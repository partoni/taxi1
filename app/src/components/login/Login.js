import React from "react";
import {useFormik } from 'formik'
import {usersApi} from '../../api/api'
export const Login =()=>{
const formik = useFormik({
    initialValues:{
        email:'',
        password:'',
        repassword:''
    },
    onSubmit:(values,{setSubmitting,resetForm})=>{
        console.log(values)
        if (values.password===values.repassword){
        usersApi.userStatus(values)
        setSubmitting(true)
        resetForm()}else{
            values.email = "неправельный пароль"
        console.log("неправельный пароль");
        }
    }
})
    return(
        <div>
            login
            <form onSubmit={formik.handleSubmit}>
                <label for = "name">email</label>
                <input id = "email" onChange={formik.handleChange}  value={formik.values.email} name="email"/>

                <label for = "password">пароль</label>
                <input type = "password" id = "password" onChange={formik.handleChange}  value={formik.values.password} name="password"/>

                <label for = "repassword">еще раз пароль</label>
                <input type = "password" id = "repassword" onChange={formik.handleChange}  value={formik.values.repassword} name="repassword"/>

                <button type="submit"  disabled={formik.isSubmitting} >регистрация</button>
            </form>
        </div>
    )
}