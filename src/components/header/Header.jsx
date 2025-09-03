import React from "react";
import {Link} from "react-router-dom";
import {Container , logout} from "../index.js";
import {useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import LogoutBtn from "./LogoutBtn.jsx";


function Header () {

const authStatus = useSelector(state => state.auth.status);

const navigate = useNavigate();
    const navItems = [
        {
            name: "Home",
            slug:'/',
            active: true,
        },
        {
            name: "Login",
            slug:'/login',
            active: true,

        },
        {
            name: "Signup",
            slug:'/signup',
            active: true,

        },
        {
            name: "About",
            slug:'',
            active: true,

        },
    ]


    return (

        <header className="py-3 shadow bg-gray-500 w-[85%] my-3 rounded-2xl">
            <Container>
                <nav className="flex items-center ">
                    <div className="mr-4">
                        <Link to="/" >
                            <h1>Logo</h1>
                        </Link>
                    </div>
                    <ul  className="ml-auto flex items-center">
                        {navItems.map((item ) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-block px-6 py-2 duration-200 hover:bg-[#eb7724] hover:text-amber-50 rounded-full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>

        </header>
    )
}

export default Header
