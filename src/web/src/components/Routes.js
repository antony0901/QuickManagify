import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsContainer from '../containers/ProductsContainer';
import CurrenciesContainer from '../containers/CurrenciesContainer';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/products' component={ProductsContainer} />
        <Route path='/currencies' component={CurrenciesContainer} />
      </Switch>
    );
  }
}

export default Routes;
