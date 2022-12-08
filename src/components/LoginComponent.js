import React from 'react'
import { useState } from 'react';
function LoginComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const formHandler=(event)=>{
      event.preventDefault();
   
      const obj={
          userFirstName:firstName,
          userLastName:lastName,
          userPassword:password,
          userEmail:email
          }
     // console.log(obj);
       alert(JSON.stringify(obj)) ;
      //axios.post(ur1/obj);
        }
  return (
    <form onSubmit={formHandler}>
    <div>
    <input type="text" name="firstname"
      value={firstName} 
      onChange={e => setFirstName(e.target.value)}
      placeholder="First name"
      
    />
    </div>
  
    <div>
    <input
      value={lastName}
      onChange={e => setLastName(e.target.value)}
      placeholder="Last name"
      type="text"
      name="lastName"
      
    /></div>
  
    <div>
    <input
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="Email address"
      type="email"
      name="email"
      
    />
    </div>
  
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

export default LoginComponent;