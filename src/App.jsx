
import {Outlet} from "react-router-dom";
import {Footer, Header} from "./components/index.js";
import {useState} from "react";
import {useDispatch} from "react-redux";
import authService   from "./appwrite/auth";
import {login, logout} from "./features/auth/authSlice.js";
import {useEffect} from "react";



function App() {
const[loading, setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(() => {
authService.getCurrentUser()
    .then((userData) => {
        if(userData){
           dispatch(login({userData}))
        } else {
            dispatch(logout())

        }
    })
    .finally(() => setLoading(false) )

} ,[])




    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between bg-amber-50">thissss
        <div className='flex flex-col flex-wrap justify-between min-h-screen w-full items-center  bg-gray-700 ' >
            <Header/>
            <min>
                <Outlet />
            </min>
            <Footer/>
        </div>
        </div>
    ) : null

}

export default App
