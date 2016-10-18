import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';
import {playerMovement} from '../actions/GameBoard';
import styles from '../styles/Gameboard';

class GameBoard extends Component {
  componentDidMount() {
    this.drawVisibleMap();
    document.addEventListener('keydown', this.onInputKeydown, false);
  }

  onInputKeydown = (event) => {
    const keycode = event.keyCode;
    switch (keycode) {
      case 37: console.log('LEFT');
        break;
      case 38: console.log('UP');
        break;
      case 39: console.log('RIGHT');
        break;
      case 40: console.log('DOWN');
        break;
      default: console.log('SOMEKEY');
    }
  }

  drawVisibleMap() {
    const context = this.gameBoardCanvas.getContext('2d');
    const styleMap = {
      9: 'black',
      0: 'grey',
      1: 'white',
      8: 'green',
    };
    context.arc(150, 150, 150, 0, 2 * Math.PI);
    context.clip();
    let counter = 0;
    for (let row = 0; row < 5; row += 1) {
      const y = row * 60;
      for (let col = 0; col < 5; col += 1) {
        const x = col * 60;
        context.fillStyle = styleMap[this.props.visibleMap[counter]];
        context.fillRect(x, y, 60, 60);
        counter += 1;
      }
    }
  }

  render() {
    return (
      <Row>
        <canvas
          ref={(c) => { this.gameBoardCanvas = c; }}
          width="300"
          height="300"
          style={styles.centerBlock}
        />
      </Row>
    );
  }
}

GameBoard.propTypes = {
  visibleMap: PropTypes.arrayOf(React.PropTypes.number).isRequired,
  keyPress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  visibleMap: state.GameBoard.character.visibleMap,
});

const mapDispatchToProps = dispatch => ({
  keyPress: (event) => {
    dispatch(playerMovement(event));
  },
  // Click...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBoard);
