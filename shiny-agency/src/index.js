import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "./utils/style/Context";
import { SurveyProvider } from "./utils/style/Context";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./pages/Header";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import Error from "./components/Error";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import GlobalStyle from "./utils/style/GlobalStyle";

const rootElement = document.getElementById("root");

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
          <Footer/>
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
