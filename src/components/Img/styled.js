import styled, { css, keyframes } from "styled-components";

import { spacing, align, debug, palette, border } from "../styles";
import { Palette, MarginSm, MarginLg, Breakpoints } from "../tokens";

const flashing = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const LoadingWrapper = styled.div`
  position: relative;
  width: 100%;

  padding-bottom: ${(props) => ` calc(100% /${props.aspect})`};
`;
export const Loading = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  animation: ${flashing} 1s linear infinite;
  background: ${Palette.grey};
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;

  transition: all 0.1s;
`;

StyledImg.defaultProps = {};

export const FloatingIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: ${Breakpoints.tablet}px) {
    ${(props) => props.spacing && `top: ${MarginSm[props.spacing]};`}
    ${(props) => props.spacing && `left: ${MarginSm[props.spacing]};`}
  }

  @media (min-width: ${Breakpoints.tablet}px) {
    ${(props) => props.spacing && `top: ${MarginLg[props.spacing]};`}
    ${(props) => props.spacing && `left: ${MarginLg[props.spacing]};`}
  }
`;

export const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  ${align()}
`;

export const ImgWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;

  cursor: ${(props) => (!props.onClick ? "default" : "pointer")};
  @media (min-width: ${Breakpoints.tablet}px) {
    ${(props) =>
      props.onClick &&
      css`
        &:hover {
          // image
          & > img {
            opacity: 0.25;
          }
          // overlay
          & > div {
            opacity: 1;
          }
        }
      `};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  ${border()}
  ${spacing()}
  ${debug()}
`;
