import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/navbar';
import AppRoutes from './routes/routes';
import Footer from './components/footer';

function App() {
  return (
    <div className="app-container">
      
    <BrowserRouter>
    <div className="content">
    <NavigationBar></NavigationBar>
    <AppRoutes></AppRoutes>
    </div>
    <Footer></Footer>
    </BrowserRouter>
    </div>
  )
}

export default App;
