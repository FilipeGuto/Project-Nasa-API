import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//PAGES
import Home from './pages/Home'
import Desenvolvedor from './pages/Desenvolvedor';
import PictureDay from './pages/PictureDay';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/picture-day' element={ <PictureDay /> } />
        <Route path='/desenvolvedor' element={ <Desenvolvedor />} />
        <Route path='*' element={ <Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
