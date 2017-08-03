import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
     <BrowserRouter>
      <Switch>

        <Route exact path="/Portfolio" component={Portfolio}/>
        <Route exact path="/About" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
