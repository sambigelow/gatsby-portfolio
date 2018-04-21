import React from 'react';
import styled from 'styled-components';

import GithubIcon from './github';
import LinkedinIcon from './linkedin';
import MailIcon from './mail';
import TwitterIcon from './twitter';

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  padding-top: 2em;
`;

export default () => (
  <LogoContainer>
    <GithubIcon />
    <LinkedinIcon />
    <MailIcon />
    <TwitterIcon />
  </LogoContainer>
);
