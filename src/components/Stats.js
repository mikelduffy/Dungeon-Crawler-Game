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
  currentHealth: state.characterCurrentHealth,
  maxHealth: state.characterMaxHealth,
  experience: state.characterExperience,
  level: state.characterLevel,
  levels: state.characterLevels,
  layer: state.layerNumber,
});

export default connect(
  mapStateToProps
)(Stats);
