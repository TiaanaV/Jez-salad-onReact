import React from 'react';
import {reset } from 'styled-reset'
import Footer from './Footer/Copyright/FeatureNav/Footer';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import classes from "./App.module.css"

function App(props) {
  return (
    <>
      <reset/>
        <div className={classes.main}>
          <Header/>
          <MainContent/>
          <Footer/>
        </div>
    </>
  );
}

export default App;
