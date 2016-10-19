import React from 'react';

const center = {
  textAlign: 'center',
};

const Footer = function() {
  return (
    <h4 style={center}>
      Use arrow keys to navigate the Dungeon layer to fight monsters, gain experience, and pick up items.
      <br /><br />
      <span style={{color: 'green'}}>Green</span> = Player&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{color: 'red'}}>Red</span> = Health&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{color: 'blue'}}>Blue</span> = Weapon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{color: 'purple'}}>Purple</span> = Enemy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{color: 'black'}}>Black</span> = Boss
    </h4>
  );
};

export default Footer;
