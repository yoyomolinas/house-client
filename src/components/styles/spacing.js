import styled, { css } from "styled-components";
import { Breakpoints, MarginSm, MarginLg, PaddingLg, PaddingSm } from "../tokens";

export default () => {
  return css`
    @media (max-width: ${Breakpoints.tablet}px) {
      ${(props) => (props.p ? `padding: ${PaddingSm[props.p]};` : ``)}
      ${(props) => (props.pr ? `padding-right: ${PaddingSm[props.pr]};` : ``)}
      ${(props) => (props.pl ? `padding-left: ${PaddingSm[props.pl]};` : ``)}
      ${(props) => (props.pt ? `padding-top: ${PaddingSm[props.pt]};` : ``)}
      ${(props) => (props.pb ? `padding-bottom: ${PaddingSm[props.pb]};` : ``)}
      
      ${(props) => (props.m ? `margin: ${MarginSm[props.m]};` : ``)}
      ${(props) => (props.mr ? `margin-right: ${MarginSm[props.mr]};` : ``)}
      ${(props) => (props.ml ? `margin-left: ${MarginSm[props.ml]};` : ``)}
      ${(props) => (props.mt ? `margin-top: ${MarginSm[props.mt]};` : ``)}
      ${(props) => (props.mb ? `margin-bottom: ${MarginSm[props.mb]};` : ``)}
    }

    @media (min-width: ${Breakpoints.tablet}px) {
      ${(props) => (props.p ? `padding: ${PaddingLg[props.p]};` : ``)}
      ${(props) => (props.pr ? `padding-right: ${PaddingLg[props.pr]};` : ``)}
      ${(props) => (props.pl ? `padding-left: ${PaddingLg[props.pl]};` : ``)}
      ${(props) => (props.pt ? `padding-top: ${PaddingLg[props.pt]};` : ``)} 
      ${(props) => (props.pb ? `padding-bottom: ${PaddingLg[props.pb]};` : ``)}
      
      ${(props) => (props.m ? `margin: ${MarginLg[props.m]};` : ``)} 
      ${(props) => (props.mr ? `margin-right: ${MarginLg[props.mr]};` : ``)} 
      ${(props) => (props.ml ? `margin-left: ${MarginLg[props.ml]};` : ``)}
      ${(props) => (props.mt ? `margin-top: ${MarginLg[props.mt]};` : ``)} 
      ${(props) => (props.mb ? `margin-bottom: ${MarginLg[props.mb]};` : ``)}
    }
  `;
};
