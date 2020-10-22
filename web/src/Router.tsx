import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Router(){
    return (
      <BrowserRouter>
        <Switch> {/* O Switch faz apenas uma rota ser chamada*/}
          <Route path="/" exact component={Landing} name="home"/>
          <Route path="/app" component={OrphanagesMap} name="orphanage-map"/>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;