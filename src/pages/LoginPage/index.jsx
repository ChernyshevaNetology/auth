import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Message } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

import { Layout } from '../../components/Layout';
import { PokemonsList } from '../../components/PokemonsList';
import { Search } from '../../components/Search';

import { clearPokemosList, loadPokemons } from '../../actions/app';
import { filterPokemons } from '../../common/helpers';
import { INCRIMENT_OFFSET } from '../../common/constants';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  // const dispatch = useDispatch();
  // const [offset, setOffset] = useState(0);
  // const [searchKey, setSearchKey] = useState('');

  // useEffect(() => {
  //   dispatch(clearPokemosList());
  // }, [dispatch]);

  // useEffect(() => {
  //   loadPokemons(dispatch, offset);
  // }, [dispatch, offset]);

  const handleSubmit = (values) => {
    console.dir(values);
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export { LoginPage };
