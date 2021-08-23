import styled, { css } from "styled-components";
import {
  Breakpoints,
  Font,
  FontWeight,
  FontSizeLg,
  FontSizeSm,
  FontLineHeightSm,
  FontLineHeightLg,
  TextAlign,
} from "../tokens";
import { textPalette } from "./palette";

export default () => {
  return css`
    font-family: ${(props) => Font[props.font]};
    font-style: normal;
    font-weight: ${(props) => FontWeight[props.fontWeight]};
    text-align: ${(props) => TextAlign[props.textAlign]};
    color: ${textPalette()};
    @media (max-width: ${Breakpoints.tablet}px) {
      font-size: ${(props) => FontSizeSm[props.fontSize]};
      line-height: ${(props) => FontLineHeightSm[props.fontSize]};
    }

    @media (min-width: ${Breakpoints.tablet}px) {
      font-size: ${(props) => FontSizeLg[props.fontSize]};
      line-height: ${(props) => FontLineHeightLg[props.fontSize]};
    }
  `;
};
