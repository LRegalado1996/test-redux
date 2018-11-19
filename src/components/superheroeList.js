import React, { Component } from 'react';

import { connect } from 'react-redux';
import {fetchData} from '../actions'

class SuperheroesList extends Component {

  componentWillMount() {
    this.props.fetchData();
  } // end componentWillMount

  getTvShows() {
    const { dataTvMaze } = this.props;

    const dataTvShow = dataTvMaze.data.map((tv, key) => {
      return <li key={tv.id}>{tv.name}</li>
    })

    return dataTvShow
  } //getSuperheroes

  render() {
    return (
      <ul>
        {this.props.dataTvMaze.isFetching && <p>loading...</p>}
        {
          this.props.dataTvMaze.data.length ?
            this.getTvShows()
          : null
        }
      </ul>
    ) //end return
  } //end render
}; // end SuperheroesList Component

const mapStateToProps = state => {

  return { dataTvMaze: state.dataReducer }
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroesList);
