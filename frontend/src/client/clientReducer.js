const INITIAL_STATE = { list: [], selectedClient: {id:0} };

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case 'CLIENT_FETCHED': {
      return { ...state, list: action.payload.data }
    }
    case 'CLIENT_SELECTED': {
      console.log('---> clientReducer');
      console.log(action.payload);
      console.log('<--- clientReducer');
      return { ...state, selectedClient: action.payload }
    }  
    default: {
      return state;
    } 
  }
}