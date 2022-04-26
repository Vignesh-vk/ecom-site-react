import axios from "axios";
// import config from "../../common/authHeaders";
const VIEW_POLICY='VIEW_POLICY';
export function AC_VIEW_POLICY(formdata){
    console.log('===-=-=action -=-=-',formdata)
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/pages/viewPage",formdata)
        .then(({data}) => {
            dispatch({type:VIEW_POLICY,payload:data})
        });
    };
}