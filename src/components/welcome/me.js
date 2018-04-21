import React from 'react';
import WelcomeElement from './welcome-element';
import Icons from '../icons';
import me from './me.png';

export default () => (
  <WelcomeElement style={{ textAlign: 'center' }}>
    <img src={me} style={{ maxWidth: '80%', margin: '0 auto' }} />
    <Icons />
  </WelcomeElement>
);
