import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Loadingtext = styled.div`
  font-size: 23px;
`;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
class Loading extends Component {
  render() {
    return (
      <DotWrapper>
        <Loadingtext> Loading</Loadingtext>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    );
  }
}
export default Loading;
