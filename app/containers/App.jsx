import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import store from '../index';
import Header from '../components/Header';
import Stats from '../components/Stats';
import Game from '../components/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Stats
          currentHealth={this.props.currentHealth}
          maxHealth={this.props.maxHealth}
        />
        <Game />
      </div>
    );
  }
}

App.propTypes = {
  currentHealth: PropTypes.string,
  maxHealth: PropTypes.string,
};

const mapStateToProps = function(store) {
  return {
    currentHealth: store.character.currentHealth,
    maxHealth: store.character.maxHealth,
    damage: store.character.damage,
    experience: store.character.experience,
    level: store.character.level,
    layer: store.layer.currentLayer,
  };
};

export default connect(mapStateToProps)(App);
