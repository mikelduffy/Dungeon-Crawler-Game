import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Header from './Header';
import Stats from '../stats/Stats';
import GameBoard from '../gameboard/GameBoard';

class App extends Component {
  render() {
    return (
      <Grid>
        <Header />
        <Stats />
        <GameBoard />
      </Grid>
    );
  }
}

export default App;
