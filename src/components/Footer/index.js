import React from "react";
import { Box } from "../Box";
import { Text } from "../Text";
import { Icon } from "../Icon";

export const Footer = (props) => {
  const { align = "center" } = props;
  return (
    <Box fit direction="column" h={align} mt="sp+3" mb="sp+3">
      <Box direction="row">
        <Icon
          onClick={() => {
            window.open("https://www.instagram.com/people_of_cryptoverse/");
          }}
          size="sc-1"
          palette="grey"
          name="instagram"
        />
        <Icon size="sc-1" palette="grey" name="mail" ml="sp+1" />
      </Box>
      <Box mt="sp+2">
        <Text textPalette="grey" fontSize="extrasmall">
          © 2021 New York. All work is protected by Ethereum.
        </Text>
      </Box>
    </Box>
  );
};
