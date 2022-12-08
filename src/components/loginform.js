//import axios from 'axios';
import React, { useState } from 'react';

function LoginForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState(false)  
  
  const formHandler=(event)=>{
    event.preventDefault();
    if(firstName.length===0 || lastName.length===0)
    {
      setError(true);
    }
    if(firstName && lastName)
    {
    const obj={
        firstName:firstName,
        lastName:lastName,
        password:password,
        email:email
        }
    console.log(obj);
      }
    //axios.post(ur1/obj);
}
  return (
    <form onSubmit={formHandler}>
      <div>
      <input type="text" name="firstName"
        value={firstName} 
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        
      />
      </div>
     {error && firstName.length ===0?
      <label style={{color:'red'}}>Firstname is required</label>:""} 
      <div>
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        
      /></div>
       {error && lastName.length ==0?
      <label style={{color:'red'}}>Lastname is required</label>:""} 
      <div>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        
      />
      </div>
      {error && email.length ==0?
        <label style={{color:'red'}}>Email is required</label>:""} 
      <div>
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default LoginForm;
