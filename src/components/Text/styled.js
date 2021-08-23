import React from "react";
import styled from "styled-components";
import { typography } from "../styles";

export const StyledText = styled.div`
  ${typography()}
`;

StyledText.defaultProps = {
  font: "regular",
  fontSize: "small",
  fontWeight: "regular",
  textPalette: "black",
  textAlign: "left",
};

export const StyledInlineText = styled.span`
  ${typography()}
`;

StyledInlineText.defaultProps = {
  font: "regular",
  fontSize: "small",
  fontWeight: "regular",
  textPalette: "black",
  textAlign: "left",
};
