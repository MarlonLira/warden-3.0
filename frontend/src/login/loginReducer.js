const INITIAL_STATE = { user: { email: '', password: '', } };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_FETCHED': {
      return { ...state, user: action.payload.data }
    }
    default: {
      return state;
    }
  }
}