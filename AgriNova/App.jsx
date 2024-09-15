import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './src/pages/WelcomePage';
import InfoPage from './src/pages/InfoPage';
import FormPage from './src/pages/FormPage';
import InfoCheckPage from './src/pages/InfoCheckPage';
import DashboardPage from './src/pages/DashboardPage';
import ModelsPage from './src/pages/ModelsPage';
import SensorPage from './src/pages/SensorPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/info" component={InfoPage} />
        <Route path="/form" component={FormPage} />
        <Route path="/infocheck" component={InfoCheckPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/models" component={ModelsPage} />
        <Route path="/sensor" component={SensorPage} />
      </Switch>
    </Router>
  );
};

export default App;
