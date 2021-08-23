import styled, { keyframes } from "styled-components";

import { Box } from "../Box";
import { palette, radius, debug } from "../styles";

const loading = keyframes`
  0% {
    width: 0%;
  }
  
  100% {
    width: 100%;
  }
`;

const StyledLoadingBar = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 100%;
  animation: ${loading} ${(props) => props.time}s ease-in-out;
  animation-iteration-count: 1;

  background: ${palette()};

  ${radius()}
  ${debug()}
`;

StyledLoadingBar.defaultProps = { palette: "black" };

export const LoadingBar = (props) => {
  return (
    <Box {...props} clear fit pb="sp+3">
      <StyledLoadingBar
        time={props.time}
        palette={props.palette}
        onAnimationEnd={
          props.onComplete
            ? props.onComplete
            : () => {
                console.log("DEFAULT LOADING COMPLETE");
              }
        }
      />
    </Box>
  );
};

LoadingBar.defaultProps = { time: 4.5 };
