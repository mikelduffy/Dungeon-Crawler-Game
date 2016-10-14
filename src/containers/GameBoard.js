import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Row, Well} from 'react-bootstrap';
import styles from '../styles/Gameboard';

class GameBoard extends Component {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const board = [];
    const stylesMap = {
      0: styles.wall,
      1: styles.path,
      2: styles.stairsdown,
      3: styles.stairsup,
      4: styles.health,
      5: styles.weapon,
      6: styles.enemy,
      7: styles.boss,
      8: styles.character,
    };

    for (let row = 0; row < height; row++) {
      const rowContents = [];
      for (let cell = 0; cell < width; cell++) {
        const cellID = `${row}-${cell}`;
        const contents = this.props.map[(row * width) + cell]
        rowContents.push(
          <td
            key={cell}
            id={cellID}
            style={stylesMap[contents]}
          />
        );
      }
      board.push(
        <tr key={row}>
          {rowContents}
        </tr>
      )
    }

    return (
      <Row>
        <table style={styles.gameBoard}>
          <tbody>
            {board}
          </tbody>
        </table>
      </Row>
    );
  }
}

GameBoard.propTypes = {
  map: PropTypes.arrayOf(React.PropTypes.number).isRequired,
  size: PropTypes.arrayOf(React.PropTypes.number).isRequired,
};

const mapStateToProps = state => ({
  map: state.Layers.map,
  size: state.Layers.size,
});

export default connect(
  mapStateToProps
)(GameBoard);
