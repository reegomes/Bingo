import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React from 'react';

function App() {
  return (
    <Header name="Fonte" links={["Sobre", "Comprar", "Contato"]}></Header>
  );
}

export default App;