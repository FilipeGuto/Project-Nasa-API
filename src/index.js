import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//PAGES
import Home from './pages/Home'
import Search from './pages/Search';
import PictureDay from './pages/PictureDay';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Earth from './pages/Earth';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/Jupiter' element={ <Jupiter /> } />
        <Route path='/Saturn' element={ <Saturn /> } />
        <Route path='/Earth' element={ <Earth /> } />
        <Route path='/Picture-Day' element={ <PictureDay /> } />
        <Route path='/Search' element={ <Search />} />
        <Route path='*' element={ <Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
