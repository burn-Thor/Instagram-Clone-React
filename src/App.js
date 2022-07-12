import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Feed from './Pages/Feed';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

const App = () => {
  const[user, setUser] = useState();
  return(

    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Login setter={setUser} user={user} />} />
        <Route path="/Home" element={<Home user={user} />} />
        <Route path="/Feed" element={<Feed user={user} />} />
        <Route
          path="/Profile"
          element={<Profile setter={setUser} user={user} />}
        />
      </Routes>
    </BrowserRouter>
  );    
};

export default App;
