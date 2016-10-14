import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Header from '../components/Header';
import Stats from '../components/Stats';
import GameBoard from '../containers/GameBoard';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <Grid>
        <Header />
        <Stats />
        <GameBoard />
        <Footer />
      </Grid>
    );
  }
}

export default App;
