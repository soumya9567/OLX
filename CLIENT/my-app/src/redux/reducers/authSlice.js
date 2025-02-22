import { createSlice } from "@reduxjs/toolkit";

const currentlyActiveUser = JSON.parse(localStorage.getItem("currentlyActiveUser")) || null; // Fixed the typo

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || [], 
        currentUser: currentlyActiveUser,
        isAuthenticated: currentlyActiveUser ? true : false,

    },
    reducers: {
        registerUser: (state, action) => {
            const existingUser = state.user.find((user) => user?.email === action.payload?.email);
            
            if (existingUser) {
                console.log('User already exists');
            } else {
                state.user.push(action.payload);
                localStorage.setItem("user", JSON.stringify(state.user)); 
            }
        },

        login:(state,action) => {
            console.log(action.payload, "inside the login function");
            const emailExist = state.user.find((user) => {
              return user?.email === action.payload?.email;
            });
            if (emailExist) {
              const isPasswordCorrect = state.user.find((user) => {
                return user?.password === action.payload?.password;
              });
              if (isPasswordCorrect) {
                state.isAuthenticated = true;
                const authenticatedUser = state.user.find((user) => {
                 return user.email === action.payload.email;
                });
                console.log(authenticatedUser,'auth user')
                localStorage.setItem(
                  "currentlyActiveUser",
                  JSON.stringify(authenticatedUser)
                );
              } else {
                console.log("password is incorrect");
              }
            } 
          },
        }
    }
);

export const { registerUser,login } = authSlice.actions;
export default authSlice.reducer;
