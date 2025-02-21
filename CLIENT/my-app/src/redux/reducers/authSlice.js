import { createSlice } from "@reduxjs/toolkit";



const currentlyActiveUser = JSON.parse(localStorage.getItem("currentlyAcitiveUser"))||null;

const authSlice = createSlice({
    name :"auth",
    initialState:{
        user:JSON.parse(localStorage.getItem("user"))||[],
        currentUser: currentlyActiveUser,
        isAutheticated: currentlyActiveUser ? true : false,
    },

    reducers:{
        registerUser:(state,action) =>{
            const existingUser = state.user.find((user)=>{
                return user?.email == action.payload?.email;
            })
        }
    }
    
})
export const {registerUser} = authSlice.actions
export default authSlice.reducer;