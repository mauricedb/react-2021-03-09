import React from 'react';

import { Jokes } from './jokes';
import { Summary } from './summary';

export function Page({ jokes }) {
  return (
    <>
      <Summary jokes={jokes} />
      <Jokes jokes={jokes} />
    </>
  );
}
