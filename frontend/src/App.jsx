import React from 'react';
import Admin from './Page/Admin'
import Home from './Page/Home'; 
import {BrowserRouter, Routes ,Route} from 'react-router-dom' 

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
      <Route path='/'  element={<Home /> }/>
      <Route path='/admin' element={ <Admin /> }/>
  </Routes>
    </BrowserRouter>
  );
};  


export default App;
