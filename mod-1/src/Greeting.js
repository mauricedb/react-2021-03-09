import React from 'react';

export class Greeting extends React.Component {
  render() {
    const { name } = this.props;

    return <div>Hello {name}</div>;
  }
}
