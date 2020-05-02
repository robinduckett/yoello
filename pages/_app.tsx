import { useReducer } from "react";
import { GlobalContext } from "../context/global";
import App from "next/app";

import { initialState, reducer } from "../context/reducer";

class YoelloDemo extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <AppPage Component={Component} pageProps={pageProps} />;
  }
}

const AppPage = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
};

export default YoelloDemo;
