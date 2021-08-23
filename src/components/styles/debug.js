import styled, { css } from "styled-components";

export default () => {
  return css`
    ${(props) => props.debug && `border: 2px solid red;`}
  `;
};
