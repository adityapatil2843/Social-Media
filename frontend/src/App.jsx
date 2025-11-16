import React from 'react'
import { Route, Roues } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Login from './pages/Login.jsx'
import Feed from './pages/Feed.jsx'
import Messages from './pages/Messages'
import ChatBox from './pages/ChatBox.jsx'
import Connection from './pages/Connection.jsx'
import Discover from './pages/Discover.jsx'
import Profile from './pages/Profile.jsx'

const App = () => {
  return (
    <>
    <Login/>
    {/*<Routes>
      <Route path='/' element={<Login/>} >
        <Route index element={<Feed/>}/>
        <Route path='messages' element={<Messages/>}/>
        <Route path='messages/:userId' element={<ChatBox/>}/>
        <Route path='connection' element={<Connection/>}/>
        <Route path='discover' element={<Discover/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Route>
    </Routes>*/}
    </>
  )
}

export default App
