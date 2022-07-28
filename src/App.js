import React from 'react';
import 'antd/dist/antd.css'; 
import Navbar from './Component/Navbar/Navbar';
import LogIn from './Component/LogIn/LogIn';

const App = () => {
    return(
      <> 
        <Navbar />
        <LogIn /> 
      </> 
    )
}

export default App;