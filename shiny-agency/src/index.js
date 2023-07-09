import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './utils/context/Context';
import { SurveyProvider } from './utils/context/Context';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import Header from './components/Header/Header';
import Results from './pages/Results/Results';
import Freelances from './pages/Freelances/Freelances';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import GlobalStyle from './utils/style/GlobalStyle';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
