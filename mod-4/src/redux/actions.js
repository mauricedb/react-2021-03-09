export const actionTypes = {
  loadJokes: 'load-jokes',
};

export function loadJokes(jokes) {
  if (!Array.isArray(jokes)) {
    throw new Error('Jokes should be an array');
  }
  return { type: actionTypes.loadJokes, payload: jokes };
}

export function fetchJokes() {
  return async function worker(dispatch) {
    const rsp = await fetch(
      'https://the-problem-solver-sample-data.azurewebsites.net/jon-skeet'
    );
    const jokes = await rsp.json();
    dispatch(loadJokes(jokes));
  };
}

// export const fetchJokes = () => () => async (dispatch) => {
//   const rsp = await fetch(
//     'https://the-problem-solver-sample-data.azurewebsites.net/chuck-norris'
//   );
//   const jokes = await rsp.json();
//   dispatch(loadJokes(jokes));
// };
