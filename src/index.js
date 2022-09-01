import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Projects from '../src/components/Projects/Projects';
import Research from './components/Research/Research';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Main from './components/main/Main';
import Contact from './components/Contact/Contact';

// import {Provider} from 'react-redux';
// import {createStore,applymiddleware,compose} from 'redux';
// import thunk from 'redux-thunk';

// import reducers from './reducers';

// const store = createStore(reducers,compose(applymiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <Router>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/research" element={<Research />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

     
    </Routes>
  </Router>
  // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
