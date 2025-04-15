import React from "react";
import { useState } from "react";

function SignUp(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [phonenumber,setPhonenumber]=useState('');
    const [email,setEmail]=useState('');
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [signupSucess,setSignupSucess]=useState(false);

    const handleUsername=(event)=>{
            setUsername(event.target.value);
    }

    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }

    const handlePhonenumber=(event)=>{
        setPhonenumber(event.target.value);
    }

    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }

    const handleSignup= async ()=>{
        setSignupSucess(false);
        console.log("BUtton is clicked");
        setError(null);
        setLoading(true);
        const signupData={
            username:username,
            password:password,
            phonenumber:phonenumber,
            email:email
        }
        try {
            console.log(signupData.username);
            const response= await fetch("http://localhost:8080/api/users/signup",
                {method:"POST",headers:{'Content-Type':'application/json',},
                body:JSON.stringify(signupData),}
            );
            console.log("test="+response.ok);
            console.log("response="+response);
            //const responsedata=await response.json();
            
            if(response.ok){
                setSignupSucess(true);
                console.log(signupSucess);
            }else{
                setError("SignUP Failed");
            }
            setLoading(false);

        } catch (error) {
            setError(error.message);
            setLoading(false);

        }

    }
    return(
        <div>
            { !signupSucess && (
                <div>
                <br />
                <label >Username:</label>
                
                <input type="text"  onChange={handleUsername}/>
                <br />
                <label >Password:</label>
                
                <input type="password" onChange={handlePassword}/>
                <br />
                <label >Phonenumber:</label>
                
                <input type="text" onChange={handlePhonenumber}/>
                <br />
                <label >Email:</label>
                
                <input type="text" onChange={handleEmail}/>
                <br />
                <button onClick={handleSignup}>{loading?"waiting...":"Register"}</button>
                </div>
            )}
            {signupSucess && <p>THE USER REGISTered sucessfully</p>}
            {error && <p>It has got ERROR:{error.message}</p>}
        </div>
    );
};
export default SignUp;