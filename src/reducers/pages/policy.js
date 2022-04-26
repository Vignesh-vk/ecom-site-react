const initialState = {
    policyInfo : {
            title : '',
            description   : '',
            id       : ''
        }
  }
  function POLICY_Reducer(state = initialState, action) {
    console.log("-=-=-=Reducer=-=-=", action)
    switch (action.type) {
        case 'VIEW_POLICY':
        return {
        ...state,
        faqInfo: action.payload
      };
      default: return state;
      }    
    }
    export default POLICY_Reducer;