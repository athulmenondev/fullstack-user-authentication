import React from "react";
import { useState } from "react";
import UserProfile from "./UserProfile";
import SignUp from "./SignUp";

function UpdateAuthPage(){
    const [showLogin,setShowLogin]=useState(false);

    const handleShowLogin=()=>{
        setShowLogin(true);
    }

    const handleShowSignup=()=>{
        setShowLogin(false);
    }

    return (
        <div>
            <button onClick={handleShowSignup}>SignUp</button>
            <button onClick={handleShowLogin}>Login</button>
            {showLogin && (
                <UserProfile/>
            )}
            {!showLogin && (<SignUp/>)}
        </div>
    );
}
export default UpdateAuthPage;