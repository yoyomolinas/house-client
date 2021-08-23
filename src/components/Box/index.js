import React from "react";
import styled from "styled-components";
import { spacing, align, debug, palette, radius, border } from "../styles";

export const Box = styled.div`
  position: relative;
  box-sizing: border-box;
  cursor: ${(props) => (!props.onClick ? "default" : "pointer")};

  ${(props) => (props.fit ? `width: 100%;` : ``)}

  transition: all 0.1s;
  background: ${palette()};

  ${align()}
  ${radius()}
  ${spacing()}
  ${border()}
  ${debug()}
`;

Box.defaultProps = {
  p: "sp+0",
  m: "sp+0",
  direction: "column",
  h: "center",
  v: "center",
  debug: false,
  fit: false,
  border: "bo+0",
};
