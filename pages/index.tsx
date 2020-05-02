import * as React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

import SwipeableViews from "react-swipeable-views";

import Head from "next/head";
import Navigation from "../components/navigation";
import Display from "../components/display";
import ProductDisplay from "../components/product";
import ShoppingCart from "../components/shopping-cart";
import { GlobalContext } from "../context/global";

const useStyles = makeStyles({
  view: {
    paddingBottom: 10,
    height: "100vh",
    "overflow-y": "scroll",
  },
});

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { state } = React.useContext(GlobalContext);

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className="container">
      <CssBaseline />

      <Head>
        <title>Yoello Brewdog Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Container maxWidth="lg">
        {state.view === null && (
          <div>
            <Navigation onChange={handleChangeIndex} value={value} />

            <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
              <div className={classes.view}>
                <Display category="pizza" />
              </div>
              <div className={classes.view}>
                <Display category="steak" />
              </div>
              <div className={classes.view}>
                <Display category="all" />
              </div>
            </SwipeableViews>
          </div>
        )}
        {state.view !== null && (
          <div>
            <ProductDisplay item={state.view} />
          </div>
        )}

        <ShoppingCart />
      </Container>
    </div>
  );
}
