import axios from "axios";
import swal from 'sweetalert';
// import config from "../common/authHeaders";
const REGISTER_USER = 'REGISTER_USER';
const FORGOT_USER='FORGOT_USER'
const LOGIN_USER='LOGIN_USER'
const RESET_PASSWORD='RESET_PASSWORD'
export function AC_REGISTER(userData) {
    console.log('======Add User=========', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/user/register", userData)
            .then(({ data }) => {
                if(data.status==1){
                swal("Good job!",data.message);
                dispatch({ type: REGISTER_USER, payload: data })
                }else{
                    swal(data.message)
                }
            });
    };
}
export function AC_LOGIN(userData) {
    console.log('======Login User=========', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/user/login", userData)
            .then(({ data }) => {
                if(data.status==1){
                    localStorage.setItem("token",data.token)
                    window.location="/"
                    dispatch({type:LOGIN_USER, payload:data});
                    swal("Good job!",data.message, "success");
                }else{
                    swal("Oops!",data.message,"error");
                    dispatch({type:LOGIN_USER, payload:data});
                }
            });
    };
}
export function AC_FORGOTPASSWORD(userData) {
    console.log('======Forgot User=========', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/user/forgotPassword", userData)
            .then(({ data }) => {
                if(data.status==1){
                swal("Good job!",data.message,"success");
                dispatch({ type: FORGOT_USER, payload: data })
                }else{
                    swal("Oops!",data.message,"error")
                }
            });
    };
}
export function AC_RESET(userData) {
    console.log('======Reset User=========', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/user/resetPassword", userData)
            .then(({ data }) => {
                if(data.status==1){
                swal("Good job!",data.message);
                dispatch({ type: RESET_PASSWORD, payload: data })
                }else{
                    swal("Oops!",data.message,"error")
                }
            });
    };
}