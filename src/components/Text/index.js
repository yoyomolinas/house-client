import React from "react";
import { StyledText, StyledInlineText } from "./styled";
import tokens from "../tokens";

export const Text = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export const InlineText = (props) => {
  return <StyledInlineText {...props}>{props.children}</StyledInlineText>;
};
