из за траблов не используется 
export const initialState = {
    users: [],
    loading: false,
    error: false,
  };
  
  export const usersReducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true, error: false };
      case "SUCCESS":
        return { ...state, users: action.payload, loading: false };
      case "ERROR":
        return { ...state, loading: false, error: true };
      default:
        return state;
    }
  };
  
