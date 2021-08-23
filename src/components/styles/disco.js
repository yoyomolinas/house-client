import styled, { css, keyframes } from "styled-components";
import { Palette } from "../tokens";

// @param attribute: css attribute to animate e.g. background-color
export const disco = (attributes, duration = 3) => {
  return (props) => {
    if (!props.disco) {
      return ``;
    }

    return css`
      animation: ${animateColor(attributes, props.disco.from, props.disco.to)} ${duration}s linear infinite;
    `;
  };
};

// @param attribute: css attribute to animate e.g. background-color
// @param from: color e.g. green
// @param to: color e.g. red
const animateColor = (attributes = ["background"], from = "green", to = "purple") => {
  console.log("animateColor");
  console.log(`${from} ${attributes} ${to} `);
  return keyframes`
    0% {
      ${attributes.map((attr) => `${attr}: ${Palette[from]};`)}
    }
    50% {
      ${attributes.map((attr) => `${attr}: ${Palette[to]};`)}
    } 
    100% {
      ${attributes.map((attr) => `${attr}: ${Palette[from]};`)}
    } 
`;
};
