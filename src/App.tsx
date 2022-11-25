import '@/assets/vendors/styles';
import React from 'react';
import './App.less';
// Routing
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Layouts
import PrivateRoute from '@/components/common/PrivateRoute';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" title="Home" component={DefaultLayout} />
      </Switch>
    </Router>
  );
};

export default App;
