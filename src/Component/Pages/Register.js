import React,{useState} from "react";
import './Pages.css'
const Register = () => {
    const [fullName,setfullName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    function setReset(){
        setfullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
  return (
    <div className="form">
        <h1>Register New User</h1>
        <div className="register">
      <div className="container">
        <label>Full Name</label>
        <input type="text" value={fullName} onChange={(e)=>setfullName(e.target.value)}  name="fullName" required />
      </div>

      <div className="container">
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  name="email" />
      </div>

      <div className="container">
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  name="password" />
      </div>

      <div className="container">
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}  name="confirmPassword" />
      </div>

      <div className="container">
        <button className="submit">Submit</button>
        <button className="reset" onClick={()=>setReset()}>Reset</button>
      </div>
      </div>

      <div className="Registerd">
        <p>full name:{fullName}</p>
        <p>email: {email}</p>
        <p>password:{password}</p>
        <p>confirm password:{confirmPassword}</p>
      </div>



    </div>
  );
};

export default Register;
