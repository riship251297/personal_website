import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
import Projects from '../src/components/Projects/Projects';
import Research from './components/Research/Research';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Main from './components/main/Main';
import Contact from './components/Contact/Contact';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);
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

