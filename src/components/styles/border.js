import styled, { css } from "styled-components";
import { Breakpoints, BorderLg, BorderSm, Palette } from "../tokens";

export default () => {
  return css`
    @media (max-width: ${Breakpoints.tablet}px) {
      ${(props) => props.border && `border: ${BorderSm[props.border]} solid ${Palette[props.palette]};`}
    }

    @media (min-width: ${Breakpoints.tablet}px) {
      ${(props) => props.border && `border: ${BorderLg[props.border]} solid ${Palette[props.palette]};`}
    }
  `;
};
