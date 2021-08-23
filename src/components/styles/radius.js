import styled, { css } from "styled-components";
import { Radius } from "../tokens";

export default () => {
  return css`
    border-radius: ${(props) => Radius[props.radius]};
  `;
};
