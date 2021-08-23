import React from "react";
import styled from "styled-components";
import { radius, debug } from "../styles";
import { Breakpoints, BorderLg, BorderSm, Palette, PaddingLg, PaddingSm } from "../tokens";

export const Separator = styled.div`
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${Breakpoints.tablet}px) {
    border-bottom: ${(props) => BorderSm[props.border]} solid ${(props) => Palette[props.palette]};
    padding-top: ${(props) => PaddingSm[props.spacing]};
    padding-bottom: ${(props) => PaddingSm[props.spacing]};
  }
  @media (min-width: ${Breakpoints.tablet}px) {
    border-bottom: ${(props) => BorderLg[props.border]} solid ${(props) => Palette[props.palette]};
    padding-top: ${(props) => PaddingLg[props.spacing]};
    padding-bottom: ${(props) => PaddingLg[props.spacing]};
  }

  ${debug()}
`;

Separator.defaultProps = {
  border: "bo+0",
  palette: "white",
  spacing: "sp+2",
};
