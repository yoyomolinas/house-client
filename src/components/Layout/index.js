import React from "react";
import { ContentWrapper, LayoutWrapper } from "./styled";

export const Layout = (props) => {
  return (
    <LayoutWrapper h="center" direction="column" {...props}>
      <ContentWrapper>{props.children}</ContentWrapper>
    </LayoutWrapper>
  );
};

Layout.defaultProps = { p: "sp+2" };
