import React, { ReactElement } from 'react';

interface Props {
  firstName: string;
}

export function Greeting({ firstName }: Props): ReactElement {
  return <div>Hello {firstName}</div>;
}
