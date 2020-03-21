const INITIAL_STATE = { list: [], selectedClient: {id:0} };

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case 'CLIENT_FETCHED': {
      return { ...state, list: action.payload.data }
    }
    case 'CLIENT_SELECTED': {
      localStorage.setItem("CLIENT_SELECTED", JSON.stringify(action.payload));
      return { ...state, selectedClient: action.payload }
    }  
    default: {
      return state;
    } 
  }
}