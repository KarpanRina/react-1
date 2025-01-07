import React from 'react';
import './App.css'
import img from './assets/react.svg'

function App() {

  const h1 = React.createElement('h1', {}, 'Заголовок');
  const p = React.createElement('p', {}, 'Параграф тексту');
  const createImg = React.createElement('img', {src: img});
  const div = React.createElement('div', {}, h1, p, createImg);

  return (
    <>
    <div>
      <h1>Заголовок</h1>
      <p>Параграф тексту</p>
      <img src={img}/>
    </div>
    {div}

    <form action="">
      <input type='text' onChange={(e) => console.log(e.target.value)}></input>
    </form>
    </>
  
  
  );
} 
export default App;
