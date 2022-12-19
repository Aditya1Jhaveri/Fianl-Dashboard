import { Button } from 'react-bootstrap'
import React from 'react'
import log from './log.css'

function Login() {
  function login() {
    window.location.href = 'Navbar'
  }
  return (
    <section>
      <form>
    <div className='log'>
      {/* <h1>Login page</h1> */}
      <br />
      <div className="col-sm-6 offset-sm-3">
        <input
          id='username'
          type="text"
          placeholder="Enter Driver ID"
          className="form-control"
        ></input>
        <br />
        <input
        id='password'
          type="password"
          placeholder="Enter PIN"
          className="form-control"
        ></input>
        <br />
        <Button className="btn btn-primary" onClick={login} style={{ }} >
          Login
        </Button>
      </div>
    </div>
    </form>
    </section>
    )
}

export default Login
