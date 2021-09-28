import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import { Component } from 'react';
import * as typeformEmbed from "@typeform/embed";
import Faq from "./components/Productpage/Faq/Faq";
import App from './App';
import './index.css';

// import { BrowserRouter as Router } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

class Series extends Component{
  
  componentDidMount(){
    const popup1 = typeformEmbed.makePopup(
      'https://5ih8bu19m4v.typeform.com/to/DiduTuKu',
      {
        mode: 'drawer_right',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: function() {
          console.log('Typeform succesfully submitted')
        }
      }
    )
    document.getElementById('bt-popup').addEventListener('click',function
    (){
      popup1.open();
    });

  }
}

const routs = (
  < BrowserRouter >
    <div>
      <Route exact path="/" component={App} />
      <Route path="/faq" component={Faq} />
    </div>
  </ BrowserRouter >
);

ReactDOM.render(routs, document.getElementById('root'));

export default Series;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
