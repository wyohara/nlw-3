import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './screens/landing';
import OrphanagesMap from './screens/orphanagesMap';

function Routes(){
  return (
    <BrowserRouter>
      <Switch> /* O Switch faz apenas uma rota ser chamada*/
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
