import styled, { css } from "styled-components";
import { Palette } from "../tokens";

export default () => {
  return css`
    body {
      font-family: "Quantico" sans-serif;
      background: ${Palette.white};
    }
  `;
};
