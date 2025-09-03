import React from "react";
import {useDispatch} from "react-redux";
import authService from "../../appwrite/auth.js";
import {logout} from  '../../features/auth/authSlice.js'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then((response) => {
            dispatch(logout());
        })
    }
    return (
        <div>
button
        </div>
    )
}

export default LogoutBtn