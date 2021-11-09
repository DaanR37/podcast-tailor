import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import PodcastTailor from "./components/Podcast Tailor/PodcastTailor";
import Productpage from "./components/Productpage/Productpage";
import CookieConsent from "react-cookie-consent";
// import Faq from "./components/Productpage/Faq/Faq";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import React, { useState } from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <PodcastTailor />
      <Productpage />
      <CookieConsent 
      debug={true}
      location="bottom"
      style={{ background: '#20b2aac7', fontSize: '18px', textAlign: 'center' }}
      buttonStyle={{ color: '#000', background: '#fff', fontSize: '18px' }}
      buttonText="prima!"
      expires={365}
      >
        Deze site gebruikt cookies. Zie ons <a href="/">privacy beleid</a> voor meer.
      </CookieConsent>
    </>
  );
}

export default App;
