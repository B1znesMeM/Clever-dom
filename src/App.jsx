import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './JSX/NavBar';
import RegPage from './JSX/RegPage';
import MainPage from './JSX/MainPage';
import About from './JSX/About';
import Projects from './JSX/Projects';

function App() {

  const [user, setUser] = useState('');

  return (
    <div style={{
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      
      {user.name ? <NavBar /> : null}
      
      <Routes>

          <Route path='/' element={<MainPage user={user}/>} />

          <Route path='/reg' element={<RegPage setUser={setUser}/>} />

          <Route path='/projects' element={<Projects />} />

          <Route path='/about' element={<About />} /> 

      </Routes>

    </div>
  );
}

export default App;
