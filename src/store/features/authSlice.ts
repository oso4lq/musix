import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserData = {
  id: number | null,
  username: string,
  first_name: string,
  last_name: string,
  email: string,
};

type AuthStateType = {
  authState: boolean,
  authUserData: UserData;
};

// Get the user data from localStorage if it exists, otherwise use default values
const userDataFromLocalStorage: UserData | null = JSON.parse(localStorage.getItem('userData') || 'null');

const initialState: AuthStateType = {
  authState: userDataFromLocalStorage !== null,
  authUserData: userDataFromLocalStorage || {
    id: null,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state) => {
      state.authState = true;
      console.log("store, auth:");
      console.log(state.authState);
      localStorage.setItem('userData', JSON.stringify(state.authUserData));
    },
    logOut: (state) => {
      state.authState = false;
      state.authUserData = {
        id: null,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
      };
      localStorage.removeItem('userData');
    },
    setAuthUserData: (state, action: PayloadAction<UserData>) => {
      state.authUserData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
  },
},
);

export const { setAuthState, logOut, setAuthUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;