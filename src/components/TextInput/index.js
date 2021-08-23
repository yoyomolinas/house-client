import React from "react";
import { StyledTextInput } from "./styled";

export const TextInput = (props) => {
  return <StyledTextInput {...props}>{props.children}</StyledTextInput>;
};
