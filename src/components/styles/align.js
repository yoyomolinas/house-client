import styled, { css } from "styled-components";
import { Alignment, Direction } from "../tokens";

export default () => {
  const display = (props) => (props.h || props.v || props.direction ? "flex" : undefined);
  const direction = (props) => Direction[props.direction];
  const wrap = (props) => (props.wrap ? "wrap" : null);

  const alignItems = (props) => {
    const align = props.direction === "row" ? props.v : props.h;
    const options = ["left", "right", "top", "bottom", "center"];
    if (options.includes(align)) return Alignment[align];
    return null;
  };

  const alignSelf = (props) => {
    const align = props.align;
    const options = ["left", "right", "top", "bottom", "center"];
    if (options.includes(align)) return Alignment[align];
    return null;
  };

  const justifyContent = (props) => {
    const align = props.direction === "row" ? props.h : props.v;
    const options = ["left", "right", "top", "bottom", "center", "between", "around"];
    if (options.includes(align)) return Alignment[align];
    return null;
  };

  return css`
    display: ${display};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    align-self: ${alignSelf};
    flex-wrap: ${wrap};
    flex-direction: ${direction};
  `;
};
