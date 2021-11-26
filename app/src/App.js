import React from 'react';
import './App.css';
import Content from './components/content/content';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter} from "react-router-dom"

function App() {
  return(
    <BrowserRouter>
    <div className="wrapper">
    <Navbar/>
    <Content/>
    </div>
    </BrowserRouter>
  )
}

export default App;