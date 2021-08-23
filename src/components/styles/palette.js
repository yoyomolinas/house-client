import { Palette } from "../tokens";

export const palette = () => {
  return (props) => (!props.clear ? Palette[props.palette] : Palette.none);
};

export const textPalette = () => {
  return (props) => Palette[props.textPalette];
};
