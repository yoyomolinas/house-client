import React, { useRef, useState, useEffect } from "react";

import { FloatingIcon, Wrapper, StyledImg, ImgOverlay, ImgWrapper, LoadingWrapper, Loading } from "./styled";
import { useIsMounted } from "../../util/hooks/useIsMounted";
import { Text } from "../Text";
import { Icon } from "../Icon";

export const Img = (props) => {
  const isMounted = useIsMounted();

  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = (url) => {
      if (isMounted()) {
        setLoading(true);
      }
      if (url) {
        const loader = new Image();
        loader.src = url;
        loader.onload = () => {
          if (isMounted()) {
            setLoading(false);
            setLoaded(true);
            setUrl(url);
          }
        };
        loader.onerror = (e) => {
          if (isMounted()) {
            console.error("IMAGE LOAD", e);

            setLoading(false);
            setLoaded(true);
            setUrl(null);
          }
        };
      } else {
        setLoading(false);
        setLoaded(false);
        setUrl(null);
      }
    };

    if (!loaded && !loading && isMounted()) {
      load(props.url);
    }
  }, [props.url]);

  return (
    <Wrapper {...props}>
      {!loaded || loading ? (
        <LoadingWrapper aspect={props.aspect || 1}>
          <Loading {...props} />
        </LoadingWrapper>
      ) : (
        <ImgWrapper {...props}>
          <StyledImg src={url} id={props.id} />
          {props.icon && (
            <FloatingIcon spacing="sp+2">
              <Icon name={props.icon} palette={props.iconColor} />
            </FloatingIcon>
          )}
          <ImgOverlay direction="column" v="center" h="center">
            <Text textAlign="center" textPalette="white" fontSize="medium">
              {props.title}
            </Text>
            <Text textAlign="center" textPalette="grey" fontSize="small">
              {props.collection}
            </Text>
          </ImgOverlay>
        </ImgWrapper>
      )}
    </Wrapper>
  );
};
