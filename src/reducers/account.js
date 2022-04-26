const initialState = {
    accountInfo : {
            name:'',
            email:'',
            mobile:'',
            gender:'',
            id:''
        }
  }
  function ACCOUNT_Reducer(state = initialState, action) {
    console.log("-=-=-=Reducer=-=-=", action)
    switch (action.type) {
        case 'VIEW_USER':
            return {
              ...state,
              accountInfo: action.payload
            };
            default: return state;
        }
    }
    export default ACCOUNT_Reducer;