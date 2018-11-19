import React, { Component } from 'react';

import { connect } from 'react-redux';

class SuperheroesList extends Component {

  getSuperheroes() {
    const { superheroes } = this.props;

    const superheroesData = superheroes.map((heroes, key) => {
      return <li key={key}>{heroes.superhero}</li>
    })

    return superheroesData
  } //getSuperheroes

  render() {
    return (
      <ul>
      {this.getSuperheroes()}
      </ul>
    ) //end return
  } //end render
}; // end SuperheroesList Component

const mapStateToProps = state => {

  return { superheroes: state.superheroes }
};

export default connect(mapStateToProps)(SuperheroesList);
