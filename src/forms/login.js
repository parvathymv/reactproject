import React from 'react'
import { useState } from 'react';
function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState(false);
    const formHandler=(event)=>
    {
        event.preventDefault();
        if(userName.length==0 && password.length==0)
        {
         setError(true); 
        }
        if(userName && password)
        {
        const loginObj={
            name:userName,
            pwd:password
        }
      console.log(loginObj);
     alert(JSON.stringify(loginObj));
     }
    }
  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
Username :<input type="text" value={userName} placeholder="Username" onChange={(e)=>setUserName(e.target.value)} />
<br/>
<br/>
<div>
{error && userName.length ==0?
  <label style={{color:'red'}}>
  Username is required</label> :""} 
</div>
Password :<input type="password" value={password} 
placeholder="password" 
onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
<div>
{error && password.length ==0?
  <label style={{color:'red'}}>
  Password is required</label> :""} 

  {error && password.length >0 && 
    password.length <8 ?<label style={{color:'red'}}>
    Password should be min 8 characters</label> :""} 
</div>
<button type="submit">Login</button> 
    </form>
    </div>
  )}
export default Login
