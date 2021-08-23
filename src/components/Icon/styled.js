import React from "react";
import styled from "styled-components";
import { IconSizeLg, IconSizeSm, Palette, Breakpoints } from "../tokens";
import { spacing, debug, align } from "../styles";
import { Vector } from "../Vector";

export const Svg = styled(Vector)`
  & > svg {
    @media (max-width: ${Breakpoints.tablet}px) {
      width: ${(props) => IconSizeSm[props.size]};
      height: ${(props) => IconSizeSm[props.size]};
    }

    @media (min-width: ${Breakpoints.tablet}px) {
      width: ${(props) => IconSizeLg[props.size]};
      height: ${(props) => IconSizeLg[props.size]};
    }

    > * {
      fill: ${(props) => Palette[props.palette]} !important;
    }
  }

  cursor: ${(props) => (!props.onClick ? "default" : "pointer")};

  ${spacing()}
  ${debug()}
  ${align()}
`;

Svg.defaultProps = {
  palette: "black",
  size: "sc+0",
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
