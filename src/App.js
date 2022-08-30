import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Photo from './components/Photo/Photo';
import Box from './components/Box/Box.jsx';

function App() {
  return (
    <>
    <div className='main_container'>
      <div className='upperboard'>
        <Navbar/>
      </div>
      <div className='middleboard'>
        <div>
          <Photo/>
        </div>
        <div>
          <Box/>
        </div>
      </div>
     </div>

    </>

      
   
  );
}

export default App;
