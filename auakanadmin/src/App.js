import id from './prove.json';
import React from 'react';
import './App.css';
import { Tabla } from "./tabla";
import  { Send } from "./scriptsend";
function App() {
 //console.log(id);
  return (
    <header>
      <h1>Publicaciones pendientes</h1>
      <main>
        <Tabla/>
        <Send/>
      </main>
    </header>
  );
}

export default App;
