import stairsUpImg from '../assets/stairsup.svg';
import stairsDownImg from '../assets/stairsdown.svg';
import heartImg from '../assets/heart.svg';
import swordImg from '../assets/sword.svg';
import enemyImg from '../assets/enemy.svg';
import bossImg from '../assets/boss.svg';
import playerImg from '../assets/player.svg';

const styles = {
  wall: {
    width: '25px',
    height: '25px',
    backgroundColor: 'gray',
    border: '1px solid black',
  },
  path: {
    width: '25px',
    height: '25px',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  stairsdown: {
    width: '25px',
    height: '25px',
    backgroundImage: `url(${stairsDownImg})`,
    backgroundSize: '25px 25px',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  stairsup: {
    width: '25px',
    height: '25px',
    backgroundImage: `url(${stairsUpImg})`,
    backgroundSize: '25px 25px',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  health: {
    width: '25px',
    height: '25px',
    backgroundImage: `url(${heartImg})`,
    backgroundSize: '25px 25px',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  weapon: {
    width: '25px',
    height: '25px',
    backgroundImage: `url(${swordImg})`,
    backgroundSize: '25px 25px',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  enemy: {
    width: '25px',
    height: '25px',
    backgroundImage: `url(${enemyImg})`,
    backgroundSize: '25px 25px',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  boss: {
    width: '25px',
    height: '25px',
    backgroundImage: `url(${bossImg})`,
    backgroundSize: '25px 25px',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  character: {
    width: '25px',
    height: '25px',
    backgroundImage: `url(${playerImg})`,
    backgroundSize: '25px 25px',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  mask: {
    // margin: 'auto',
    // WebkitMaskImage: '-webkit-gradient(linear, left 90%, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
    clip: 'circle(60px at center)',
    backgroundColor: '#222222',
  },
  gameBoard: {
    margin: 'auto', // Position the div with this style
  },
};

export default styles;

// const stylesMap = {
//   0: styles.wall,
//   1: styles.path,
//   2: styles.stairsdown,
//   3: styles.stairsup,
//   4: styles.health,
//   5: styles.weapon,
//   6: styles.enemy,
//   7: styles.boss,
//   8: styles.character,
// };
