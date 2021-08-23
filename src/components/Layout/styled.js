import styled from "styled-components";
import { Breakpoints } from "../tokens";
import { align, debug, spacing } from "../styles";

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: ${Breakpoints.tablet}px) {
    max-width: 1000px;
  }

  ${debug()}
`;

export const LayoutWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  ${align()}
  ${spacing()}
  ${debug()}
`;
