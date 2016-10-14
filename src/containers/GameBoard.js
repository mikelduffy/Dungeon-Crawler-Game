import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';
// import styles from '../styles/Gameboard';

class GameBoard extends Component {
  componentDidMount() {
    this.drawVisibleMap();
  }

  drawVisibleMap() {
    const context = this.gameBoardCanvas.getContext('2d');
    const styleMap = {
      0: 'black',
      1: 'grey',
      2: 'white',
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
        // console.log(`x:${x}, y:${y}, counter:${counter}`);
        counter += 1;
      }
    }

    // Drawing image directly (not working)
    // const player = new Image();
    // player.src = this.props.playerImage;
    // player.width = 60;
    // player.height = 60;
    // player.onLoad = function() {
    //   context.drawImage(player, 60, 0);
    // };
    // Patterning image on a rectangle (not working)
    // img.src = this.props.characterImage;
    // const pat = context.createPattern(this.imgplayer, 'no-repeat');
    // context.rect(0, 0, 60, 60);
    // context.fillStyle = pat;
    // context.fill();
  }

  render() {
    return (
      <Row>
        { /* <img
          role="presentation"
          width="60"
          height="60"
          src={this.props.playerImage}
        /> */ }
        <canvas
          ref={(c) => { this.gameBoardCanvas = c; }}
          width="300"
          height="300"
          style={{
            display: 'block',
            margin: 'auto',
          }}
        />
      </Row>
    );
  }
}

GameBoard.propTypes = {
  visibleMap: PropTypes.arrayOf(React.PropTypes.number).isRequired,
  playerImage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  visibleMap: state.Character.visibleMap,
  playerImage: state.Character.image,
});

export default connect(
  mapStateToProps
)(GameBoard);
