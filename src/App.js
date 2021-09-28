import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import PodcastTailor from "./components/Podcast Tailor/PodcastTailor";
import Productpage from "./components/Productpage/Productpage";
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
    </>
  );
}

export default App;
