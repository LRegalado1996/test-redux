import React, { Component } from 'react';
import SuperheroesList from './superheroeList';

import { connect } from 'react-redux';
import * as actions from '../actions';

class TabBarList extends Component {

  tabAction(tab) {
    this.props.selected_tab(tab);
    console.log(this.props.tabsId)
  }; // end tabAction

  render() {
    console.log(this.props);
    return (
      <nav className='list'>
        <ul>
          <li>
            <button
              onClick={() => this.tabAction('TAB_1')}
            >1</button>
            <SuperheroesList />
          </li>
          <li>
            <button
              onClick={() => this.tabAction('TAB_2')}
            >2</button>
          </li>
          <li>
            <button
              onClick={() => this.tabAction('TAB_3')}
              >3</button>
          </li>
        </ul>
      </nav>
    ); // end return
  } // end render
} // end TabBarList Component

const mapStateToProps = state => {
  return { tabsId : state.tabId }
}

// export default connect(mapStateToProps)(TabBarList);
export default connect(mapStateToProps, actions)(TabBarList)
