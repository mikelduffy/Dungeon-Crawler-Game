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
            {currentHealth} / {maxHealth} &nbsp; <div style={styles.health} />
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
  currentHealth: state.Character.currentHealth,
  maxHealth: state.Character.maxHealth,
  experience: state.Character.experience,
  level: state.Character.level,
  levels: state.Character.levels,
  layer: state.Layers.number,
});

export default connect(
  mapStateToProps
)(Stats);
