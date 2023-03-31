import React from 'react';
import ReactDOM from 'react-dom';

//creating element repatedly through setinterval func as React createds element for once
setInterval( () => {
  // due to closure, its real time updating
  const element = (
    <h1 className="heading">
      <span className="text">Real Clock: {new Date().toLocaleString()}</span>
    </h1>
  )
  ReactDOM.render(element, document.getElementById("root"))
}, 1000)

