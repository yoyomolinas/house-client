import { useState } from "react";

import "./App.css";

import axios from "axios";

import { Box } from "./components/Box";
import { Logo } from "./components/Logo";

import React from "react";
import { createGlobalStyle } from "styled-components";
import { body } from "./components/styles";

import { Page } from "./components/Page";
import { Separator } from "./components/Separator";
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";

const GlobalStyle = createGlobalStyle`
  ${body()}
`;

function App() {
  const [inp, setInp] = useState("");
  const [state, setState] = useState(false);
  const [data, setData] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "https://9rv0raxiz5.execute-api.us-east-1.amazonaws.com/do",
      data: {
        uri: inp,
        destinations: ["Bank Station", "Lincoln's Inn Fields"],
      },
    })
      .then((response) => {
        setData(response.data);
        setState("OK");
      })
      .catch((error) => {
        setData(error.response.data);
        setState("ERR");
      });
  };
  return (
    <div>
      <header>
        <GlobalStyle />
        <link
          href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </header>
      <body>
        <Page>
          <Box direction="column" p="sp+3">
            <Logo onClick={() => {}} />

            <Separator spacing="sp+1" />

            <TextInput
              debug
              onChange={(event) => {
                setInp(event.target.value);
              }}
              radius="ra+1"
              palette="black"
              p="sp+2"
              border="bo+2"
              type="text"
              name="uri"
            />

            <Separator spacing="sp+2" />
            <Box h="center">
              <Button disco fontSize="large" pr="sp+3" pl="sp+3" onClick={onSubmit}>
                Send
              </Button>
            </Box>

            <Separator spacing="sp+2" />
            {state === "OK" && (
              <Box direction="row">
                <Icon name="tick-circle" mr="sp+2" />
                <Text fontSize="extra-small">
                  Success. Inserted property on &nbsp;
                  <b>
                    <u>{data.property_details.address}</u>
                  </b>
                  &nbsp; into &npsp;
                  <a href={data.notion_page_uri}> your notion page</a>.
                </Text>
              </Box>
            )}
            {state === "ERR" && (
              <Text fontSize="extra-small">
                Cannot parse details for the provided URI:
                <b>{data.message}</b>
              </Text>
            )}
            <Separator spacing="sp+2" />
          </Box>
        </Page>
      </body>
    </div>
  );
}

export default App;
