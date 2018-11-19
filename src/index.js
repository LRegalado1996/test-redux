import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';

import TabBarList from './components/TabBarList';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <TabBarList />
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
