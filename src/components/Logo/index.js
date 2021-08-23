import React from "react";

import styled from "styled-components";

import { spacing, debug, align } from "../styles";
import { Vector } from "../Vector";

export const Svg = styled(Vector)`
  width: 100%;
  & > svg {
    width: 100%;
    height: auto;
  }
  cursor: ${(props) => (!props.onClick ? "default" : "pointer")};

  ${debug()}
`;

Svg.defaultProps = {};

export const Logo = (props) => {
  return <Svg cleanMethod="none" v="center" {...props} src={"/logo.svg"} />;
};
