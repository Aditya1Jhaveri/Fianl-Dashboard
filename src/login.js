import { Button } from "react-bootstrap";
import React ,{useState,useEffect} from "react";
import { Navigate } from "react-router-dom";
// import head from "./head";
function Login() {
  const [DriverID,setEmail]=useState("");
   const [Password,setPassword]=useState("");
  // const navigate = useNavigate();
  useEffect(() =>
  {
      if(localStorage.getItem('user-info'))
      {
              // navigate("/dashboard");
      }
  },[])
  async function login() {
    console.log(DriverID,Password);
    let item = {DriverID,Password};
    let result=await fetch("https://driverportalapi.adsdev.uk/1/Authentication",{
        method:"post",
        body:JSON.stringify({DriverID,Password}),
        headers:{
            "Content-Type":"application/json",  
            "Accept":"application/json"
        },

    });
    result = await result.json();
    console.log(result);
    if(result.response)
    {
      localStorage.setItem('result', JSON.stringify(result))  

      // Navigate('/Navbar');
      window.location.href = "upcomingrides";
    }
 
  }
  return (
    <div>
      <h1>Login page</h1>
      <br />
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="Enter Driver ID"
          className="form-control"
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Enter PIN"
          className="form-control"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        ></input>
        <br />
        <Button className="btn btn-primary" onClick={login}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
