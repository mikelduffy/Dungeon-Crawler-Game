import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Row, Well} from 'react-bootstrap';
import styles from './styles';

const Stats = ({
  currentHealth,
  maxHealth,
  damage,
  experience,
  levels,
  level,
  layer,
}) => (
    <Row>
      <Well bsSize="small">
        <div style={styles.statContainer}>
          <div style={styles.stat}>
            {currentHealth} / {maxHealth} &#10084;
          </div>
          <div style={styles.stat}>
            {damage} &#9876;
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
  damage: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  levels: PropTypes.arrayOf(React.PropTypes.number).isRequired,
  layer: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  currentHealth: state.Character.currentHealth,
  maxHealth: state.Character.maxHealth,
  damage: state.Character.damage,
  experience: state.Character.experience,
  level: state.Character.level,
  levels: state.Character.levels,
  layer: state.Layers.number,
});

export default connect(
  mapStateToProps
)(Stats);
