import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
// import ClientForm from './components/ClientForm';
// import FreelanceForm from './components/FreelanceForm';
import Error from './components/Error/index';
import Results from './pages/Results';
import Freelances from './pages/Freelances';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelance" element={<Freelances />} />
        {/* Nous imbriquons nos composants dans survey 
        <Route path="client" element={<ClientForm />} />
        <Route path="freelance" element={<FreelanceForm />} />
        */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
