import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faculties from './faculties';
import Home from './Home';
import './index.css';
import Layout from './Layout';
import FacultyDetails from './facultydetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Routes>
         <Route path='/' element={<Layout/>}>
             <Route index element={<Home/>}></Route>
             <Route path='/faculties' element={<Faculties/>}></Route>
             <Route path='/facultydetails/:id' element={<FacultyDetails/>}></Route> 
         </Route>
      </Routes>
  </BrowserRouter>
);

