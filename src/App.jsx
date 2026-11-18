import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Explore from './Pages/Explore'
import Requests from './Pages/Requests'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'

function App() {
return (
    <>
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/login' element = {<Login />}/>
        <Route path = '/register' element = {<Register />}/>
        <Route path = '/dashboard' element = {<Dashboard />}/>
        <Route path = '/profile' element = {<Profile />}/>
        <Route path = '/explore' element = {<Explore />}/>
        <Route path = '/requests' element = {<Requests />}/>
      </Routes>
    </>
  )
}

export default App

