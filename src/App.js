import './App.css'
import Dashboard from './components/Sidebar/Dashboard'
import UpcomingRides from './components/Sidebar/UpcomingRides'
import Logout from './components/Sidebar/Logout'

import { Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../src/components/Navigation/Navbar'
import Login from './login.js'
import LoginMain from './LoginMain'
// import Aditya from './aditya';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginMain />} />
      <Route path="/" element={<Login />}></Route>
      <Route exact path="/Navbar" element={<Navbar />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/upcomingrides" element={<UpcomingRides />} />
      <Route path="/Logout" element={<Logout />} />
    </Routes>
  )
}

export default App
