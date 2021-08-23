import React from "react";
import styled from "styled-components";
import { LogoSizeLg, LogoSizeSm, Palette, Breakpoints } from "../tokens";
import { spacing, debug, align } from "../styles";

export const LogoWrapper = styled.div`
  @media (max-width: ${Breakpoints.tablet}px) {
    width: ${(props) => LogoSizeSm[props.size]};
  }

  @media (min-width: ${Breakpoints.tablet}px) {
    width: ${(props) => LogoSizeLg[props.size]};
  }

  ${spacing()}
  ${debug()}
  ${align()}
`;

LogoWrapper.defaultProps = {
  size: "fluid",
  p: "sp+0",
  m: "sp+0",
  pr: "sp+0",
  mr: "sp+0",
  pl: "sp+0",
  ml: "sp+0",
  pt: "sp+0",
  mt: "sp+0",
  pb: "sp+0",
  mb: "sp+0",
};
