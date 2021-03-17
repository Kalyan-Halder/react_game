import React from 'react' ; 
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import CartTemplate from './CartTemplate';
import ArriForCart from './AttriForCart';
import './index.css' ;

function array(val){
   return(
    <CartTemplate 
    img ={val.img}
    name = {val.name}
    details = {val.details}
    link = {val.game_link}
    IMDB ={val.IMDB}
    IGN = {val.IGN}
    Other = {val.Other}
  />
   );
}

ReactDOM.render(
  <>
     <Header/>
    <div className="MAIN">
      {ArriForCart.map(array)}
  </div>
    <Footer/>
  </>,
  document.getElementById('root')
);