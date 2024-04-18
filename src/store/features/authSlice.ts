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
  authUserToken?: string;
};

// Get the user data and token from localStorage if it exists, otherwise use default values
const userDataFromLocalStorage: UserData | null = JSON.parse(localStorage.getItem('userData') || 'null');
const userTokenFromLocalStorage: string | null = localStorage.getItem('userToken') || 'null';

const initialState: AuthStateType = {
  authState: userDataFromLocalStorage !== null,
  authUserData: userDataFromLocalStorage || {
    id: null,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  },
  authUserToken: userTokenFromLocalStorage || undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //  Set the authState to true and save the user data to localStorage
    setAuthState: (state) => {
      state.authState = true;
      localStorage.setItem('userData', JSON.stringify(state.authUserData));
    },
    // Log out the user and remove the user data from the state and localStorage
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
    // Set the user data to the state and save it to localStorage
    setAuthUserData: (state, action: PayloadAction<UserData>) => {
      state.authUserData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    // Set the token to the state and save it to localStorage
    setAuthUserToken: (state, action: PayloadAction<string>) => {
      state.authUserToken = action.payload;
      console.log(state.authUserToken);
      localStorage.setItem('userToken', action.payload);
    },
  },
},
);

export const { setAuthState, logOut, setAuthUserData, setAuthUserToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
