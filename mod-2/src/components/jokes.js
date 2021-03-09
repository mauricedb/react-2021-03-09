import React from 'react';

// const url =
//   'https://the-problem-solver-sample-data.azurewebsites.net/jon-skeet';

export class Jokes extends React.Component {
  state = {
    jokes: [],
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  async loadJokes() {
    const rsp = await fetch(this.props.url);
    const jokes = await rsp.json();
    //this.state.jokes = jokes; Don't do this
    this.setState({
      jokes,
    });
  }

  componentDidMount() {
    if (this.props.url) {
      this.loadJokes();
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.url !== this.props.url) {
      this.loadJokes();
    }
  }

  compo;

  onClick() {
    alert('You clicked on me. Jokes: ' + this.state.jokes.length);
  }

  // onClick = () => {
  //   alert('You clicked on me. Jokes: ' + this.state.jokes.length);
  // };

  render() {
    return (
      <div>
        <h2>Jokes</h2>
        <ul>
          {this.state.jokes.map((j) => (
            <li key={j.id} onClick={this.onClick}>
              {j.joke}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
