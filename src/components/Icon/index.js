import { Svg } from "./styled";

export const Icon = (props) => {
  const { name } = props;

  let icon = name;
  if (!icon) icon = "plus";
  const src = `/icons/${icon}.svg`;

  return <Svg v="center" {...props} src={src} />;
};
