import React from "react";
import { StyledButton } from "./styled";
import { Icon } from "../Icon";

export const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.icon && (
        <Icon
          name={props.icon}
          palette={props.textPalette}
          size="sc-1"
          mr={props.label ? "sp+1" : "sp+0"}
          onClick={props.onClick}
        />
      )}
      {props.label}
      {props.children}
    </StyledButton>
  );
};
