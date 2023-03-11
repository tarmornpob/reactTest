import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import MyApp from './MyApp';
import Tx from './Tx';



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//import Tn from './Tn';


//import Navbar from './Navbar';


import reportWebVitals from './reportWebVitals';



/*

ReactDOM.render(

  
//  <React.StrictMode>
  <Header/>,
  //  </React.StrictMode>,
    document.getElementById('navbar')


  ///document.getElementById('root')
);

ReactDOM.render(

  
//  <React.StrictMode>
  <MyApp/>,
  //  </React.StrictMode>,
    document.getElementById('root')


  ///document.getElementById('root')
);
*/

//******** Rendering Header ***********//


//******** Rendering Home ***********//
ReactDOM.render(<MyApp/>,document.getElementById('root'));


//******** Rendering Home ***********//
//ReactDOM.render(<MyApp/>,document.getElementById('root'));


//******** Rendering Ajax Call ***********//
//ReactDOM.render(<Tn/>,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
