// App.jsx
import React from 'react';
import Landing from './components/Landing';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Landing />
    // </div>
     <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
}

export default App;