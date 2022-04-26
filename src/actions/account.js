import axios from "axios";
// import config from "../../common/authHeaders";
const VIEW_USER = 'VIEW_USER';
const UPDATE_ACCOUNT='UPDATE_ACCOUNT';

export function AC_VIEW_USER(formdata){
    console.log('===-=-=action -=-=-',formdata)
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/user/viewUser",formdata)
        .then(({data}) => {
            dispatch({type:VIEW_USER,payload:data})
        });
    };
}
export function AC_HANDLE_INPUT_CHANGE(name,value){
    return function(dispatch){
            dispatch({type:UPDATE_ACCOUNT, name:name, value:value})
    };
}