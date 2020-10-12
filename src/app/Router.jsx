import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AbilityPage } from '../pages/AbilityPage';
import { LoginPage } from '../pages/LoginPage';
import { PokemonPage } from '../pages/PokemonPage';
import { NotFoundPage } from '../pages/NotFoundPage';

const Router = () => (
  <Switch>
    <Route path="/" exact component={LoginPage} />
    <Route path="/pokemon/:id" component={PokemonPage} />
    <Route path="/ability/:id" component={AbilityPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export { Router };
