import React from "react";
import styled from "styled-components";
import { spacing, border, radius, typography, align, debug } from "../styles";
import { Palette } from "../tokens";

export const StyledTextInput = styled.input`
  width: 100%;
  outline: none;
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 0 2px ${Palette.blue} inset;
  }

  transition: box-shadow 0.1s;

  ${border()}
  ${radius()}
  ${spacing()}
  ${typography()}
  ${align()}
  ${debug()}
`;

StyledTextInput.defaultProps = {
  font: "regular",
  fontSize: "small",
  fontWeight: "regular",
  textPalette: "black",
  textAlign: "left",
};
