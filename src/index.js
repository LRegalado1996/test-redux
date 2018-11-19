import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';

import SuperheroesList from './components/superheroeList';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <SuperheroesList />
      </Provider>
    );
  }
}


class Game extends Component {

  render() {

    return (
      <div className="game">
        <App />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
