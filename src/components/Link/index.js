import styled from "styled-components";

import { Palette } from "../tokens";
import { typography } from "../styles";

export const StyledLink = styled.text`
  ${typography()}

  cursor: ${(props) => (!props.onClick ? "default" : "pointer")};
  transition: all 0.1s;
  color: ${(props) => (props.theme === "dark" ? Palette.grey : Palette.darkgrey)};
  &:hover {
    color: ${(props) => (props.theme === "dark" ? Palette.white : Palette.black)};
  }
`;

StyledLink.defaultProps = {
  font: "regular",
  fontSize: "extrasmall",
  fontWeight: "regular",
  textAlign: "left",
  theme: "light",
};

export const Link = (props) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};
