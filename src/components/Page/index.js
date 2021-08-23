import React from "react";
import styled from "styled-components";
import { Palette } from "../tokens";
import { palette, debug } from "../styles";

const PageWrapper = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Page = (props) => {
  return <PageWrapper>{props.children}</PageWrapper>;
};
