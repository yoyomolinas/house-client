import React from "react";
import styled, { keyframes } from "styled-components";
import { palette, spacing, border, radius, typography, align, debug } from "../styles";
import { disco } from "../styles/disco";

export const StyledButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  box-sizing: border-box;

  background: ${palette()};

  ${(props) => (props.fit ? `width: 100%;` : ``)}

  ${border()}
  ${radius()}
  ${spacing()}
  ${typography()}
  ${align()}
  ${debug()}

  transition: all 0.1s;

  &:hover {
    transform: translate(0px, -1.5px);
  }

  cursor: ${(props) => (!props.onClick ? "default" : "pointer")};

  ${disco(["background", "border-color"], 15)}
`;

StyledButton.defaultProps = {
  palette: "grey",
  radius: "ra+1",
  border: "bo+0",
  clear: false,
  font: "regular",
  fontWeight: "regular",
  fontSize: "small",
  textAlign: "center",
  textPalette: "black",
  p: undefined,
  m: undefined,
  pr: undefined,
  mr: undefined,
  pl: undefined,
  ml: undefined,
  pt: undefined,
  mt: undefined,
  pb: undefined,
  mb: undefined,
  disco: undefined,
};
