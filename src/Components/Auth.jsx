import React from "react";
import { Link, Outlet } from "react-router-dom";


function Auth(){

    return(
        <>

        <nav>
            {/* <Link to="/aura/signin">Sign in</Link> */}
            {/* <Link to="/aura/signup">Sign up</Link> */}
        </nav>
        <Outlet/>
        </>
    )
}
export default Auth