import React,{useState} from "react";
 
const SignUp =()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const collectData=()=>{
        console.warn(email,password)
    }
    return(
        <div className="signup">
            <h1>SignUp</h1>

            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />

            <input className="inputBox" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" />

            <button onClick={collectData} className="appButton" type="button" >Sign Up</button>
        </div>
    )
}
export default SignUp;