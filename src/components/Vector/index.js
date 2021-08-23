import React, { Component } from "react";

/*globals
window
fetch
clearInterval
setInterval
*/

const cache = {
  init: (parent) => {
    if (!parent.injectedSVGs) parent.injectedSVGs = {};
    if (!parent.requestedSVGs) parent.requestedSVGs = {};
  },
  getRequested: (key) => {
    if (typeof window !== "undefined") {
      return window.requestedSVGs[key];
    }
    return null;
  },
  setRequested: (key, value) => {
    if (typeof window !== "undefined") {
      window.requestedSVGs[key] = true;
    }
  },
  get: (key) => {
    if (typeof window !== "undefined") {
      return window.injectedSVGs[key];
    }
    return null;
  },
  set: (key, value) => {
    if (typeof window !== "undefined") {
      window.injectedSVGs[key] = value;
    }
  },
};

if (typeof window !== "undefined") {
  cache.init(window);
}

export const CleanSVG = (html) => {
  html = html.replace(/black/g, "");
  html = html.replace(/white/g, "");
  html = html.replace(/#([0-9a-f]{3,6})/g, "");
  html = html.replace(/(<(title)[a-zA-Z0-9="' ]*>)[a-zA-Z0-9\t\n ]+(<\/\2>)/g, "");
  return html;
};

export const LoadSVG = (src, onCompleted, cleaner) => {
  if (!cache.getRequested(src)) {
    fetch(src, { method: "get" })
      .then((response) => {
        if (response.status == 200) {
          return response.text();
        } else {
          return null;
        }
      })
      .then((body) => {
        if (body) {
          const data = {
            svg: cleaner(body),
            src,
          };

          cache.set(src, data);
          if (onCompleted) {
            onCompleted(data);
          }
        }
      });
    cache.setRequested(src);
  }
};

export class Vector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      svg: null,
      src: this.props.src,
    };
  }

  componentDidMount() {
    this._ismounted = true;
    this.get(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.src != this.props.src) {
      this.setState(
        {
          src: nextProps.src,
        },
        () => {
          this.get(nextProps);
        }
      );
    }
  }

  componentWillUnmount(nextProps) {
    this._ismounted = false;
    clearInterval(this.checkFetching);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  isCached(props) {
    const { src } = props || this.props;
    return cache.get(src);
  }

  isRequested(props) {
    const { src } = props || this.props;
    return cache.getRequested(src);
  }

  download(src, onCompleted) {
    LoadSVG(src, onCompleted, this.getCleaner());
  }

  getCleaner(props = this.props) {
    const { cleanMethod = "default" } = props;
    if (cleanMethod !== "none") {
      if (cleanMethod === "default") {
        return CleanSVG;
      }
    }
    return (body) => body;
  }

  get(props) {
    const cached = this.isCached(props);
    const cleaner = this.getCleaner();

    if (cached) {
      this.setState({
        svg: cleaner(cached.svg),
      });
    } else {
      if (!this.isRequested(props)) {
        this.download(props.src, (data) => {
          if (this._ismounted) {
            this.setState(data);
          }
        });
      } else {
        this.checkFetching = setInterval(() => {
          const cached = this.isCached(props);
          if (cached) {
            this.setState({
              svg: cleaner(cached.svg),
            });
            clearInterval(this.checkFetching);
          }
        }, 50);
      }
    }
  }

  render() {
    const { svg } = this.state;

    const {
      className,
      onClick,
      onMouseOver,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      onTouchStart,
      onTouchEnd,
      style,
    } = this.props;

    const props = {
      className,
      onClick,
      onMouseOver,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      onTouchStart,
      onTouchEnd,
      style,
    };

    if (svg && this._ismounted) {
      return <div {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
    }

    return <div className={className} />;
  }
}
