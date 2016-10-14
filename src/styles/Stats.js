import sword from '../assets/sword.svg';
import heart from '../assets/heart.svg';

const styles = {
  stat: {
    margin: '10px auto 10px auto',
  },
  statContainer: {
    display: 'flex',
    margin: 'auto',
  },
  health: {
    float: 'right',
    width: '20px',
    height: '20px',
    backgroundImage: `url(${heart})`,
    backgroundSize: '20px 20px',
  },
  damage: {
    float: 'right',
    width: '20px',
    height: '20px',
    backgroundImage: `url(${sword})`,
    backgroundSize: '20px 20px',
  },
};

export default styles;
