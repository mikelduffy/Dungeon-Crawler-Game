import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Row, Well} from 'react-bootstrap';
import styles from '../styles/Stats';

const Stats = ({
  currentHealth,
  maxHealth,
  experience,
  levels,
  level,
  layer,
}) => (
  <Row>
    <Well bsSize="small">
      <div style={styles.statContainer}>
        <div style={styles.stat}>
          {currentHealth} / {maxHealth} &nbsp; <span style={{color: 'red'}}>&#10084;</span>
        </div>
        <div style={styles.stat}>
          {experience} / {levels[level]} XP
        </div>
        <div style={styles.stat}>
          Level: {level}
        </div>
        <div style={styles.stat}>
          Layer: {layer}
        </div>
      </div>
    </Well>
  </Row>
);

Stats.propTypes = {
  currentHealth: PropTypes.number.isRequired,
  maxHealth: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  levels: PropTypes.arrayOf(React.PropTypes.number).isRequired,
  layer: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  currentHealth: state.GameBoard.character.currentHealth,
  maxHealth: state.GameBoard.character.maxHealth,
  experience: state.GameBoard.character.experience,
  level: state.GameBoard.character.level,
  levels: state.GameBoard.character.levels,
  layer: state.GameBoard.layer.number,
});

export default connect(
  mapStateToProps
)(Stats);
