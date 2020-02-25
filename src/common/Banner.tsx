import React from 'react';
import styled from 'styled-components';
import { brandColor } from '../styles/variable';

const BannerContainer = styled.div`
  background-color: ${brandColor};
  height: 168px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  h5 {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

export default function Banner() {
  return (
    <BannerContainer>
      <h1>Conduit</h1>
      <h5>A place to share your knowledge.</h5>
    </BannerContainer>
  );
}
