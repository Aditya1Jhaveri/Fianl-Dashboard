import React, { useState, useEffect } from 'react'
// import './App.css'
import './log.css'

export const LoginMain = (props) => {
  const [DriverID, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  // console.log(DriverID, Password)

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      // navigate("/dashboard");
    }
  }, [])
  async function login() {
    let item = { DriverID, Password }

    let result = await fetch(
      'https://driverportalapi.adsdev.uk/1/Authentication',
      {
        method: 'post',
        body: JSON.stringify({ DriverID, Password }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
    result = await result.json()
    console.log(result)
    if (result.response) {
      localStorage.setItem('result', JSON.stringify(result))

      // Navigate('/Navbar');
      window.location.href = 'upcomingrides'
    }
  }

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(DriverID,Password);
  // }

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2>Login</h2>
        <br />
        <form autoComplete="on">
          <label for="dname" />
          <input
            type="text"
            placeholder="Enter Driver ID"
            id="dname"
            name="dname"
            required
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <br />

          <label for="piname" />
          <input
            type="password"
            placeholder="Enter PIN"
            id="piname"
            name="piname"
            required
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
           </form>
          <button type="submit" onClick={login}>
            Log In
          </button>
       
      </div>
    </div>
  )
}

export default LoginMain
