import { Button } from 'react-bootstrap'
import React from 'react'

function Login() {
  function login() {
    window.location.href = 'Navbar'
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
        ></input>
        <br />
        <input
          type="password"
          placeholder="Enter PIN"
          className="form-control"
        ></input>
        <br />
        <Button className="btn btn-primary" onClick={login}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
