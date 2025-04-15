import React from "react";
import { useState,useEffect } from "react";

function UserProfile(){
  const [username,setUsename] = useState('');
  const [password,setPassword]=useState('');
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  
  const handleUsername=(event)=>{
    setUsename(event.target.value);
  }

  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }
  const handFetchUser= async() =>{
    setLoading(true);
    setError(null);
    setUser(null);
    const loginData = {
      username: username,
      password: password
    };
    try{
      const response = await fetch("http://localhost:8080/api/users/login",{method:"POST",headers:{'Content-Type':'application/json',},body:JSON.stringify({username:username,password:password}),});
      if(!response.ok){
        throw new Error(`HTTP ERROR STATUS:${response.status}`);
      }
      const fetchedData=await response.json();
      console.log(fetchedData);
      setUser(fetchedData);
      setLoading(false);
    }catch(e){
      setError(e);
      setLoading(false);
    }
  };
  return(
    <div>
      <h1>USEER DETAILS</h1>
      <div>
        <label>Enter Username: </label>
        <br/>
        <input type="text" onChange={handleUsername} value={username}/>
        <br/>        
        <label>Password:</label>
        <br/>
        <input type="text" onChange={handlePassword}></input>
        <br/>
        <button onClick={handFetchUser} disabled={loading}>
          {loading?"Fetching data ...":"Login"}
        </button>
      </div>
        {loading && <p>Loading uesr data...</p>}
        {error && <p>Error:{error.messege}</p>}
        {user && (
          <div>
            <p>USERNAME: {user.username}</p>
            <p>PASSWORD: {user.password}</p>
            <p>PHONE:{user.phonenumber}</p>
            <p>EMAIL:{user.email}</p>
          </div>
        )}
    </div>
  );

}

export default UserProfile;