import React from 'react';

import { Jokes } from './jokes';
import { Summary } from './summary';

import { useDispatch } from 'react-redux';
import { fetchJokes } from '../redux/actions';

export function Page() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchJokes());
  }, [dispatch]);

  return (
    <>
      <Summary />
      <Jokes />
    </>
  );
}
