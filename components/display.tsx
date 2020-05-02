import { stringify, ParsedUrlQueryInput } from "querystring";

import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import useSWR from "swr";

import fetch from "../libs/fetch";

import { GlobalContext } from "../context/global";
import { GlobalState } from "../context/reducer";
import { BeerRecord, BeerParams } from "../interfaces";

import { BeerItem } from "./beer-item";

function sortBeers({ by, dir }) {
  return function (a: any, b: any) {
    if (dir === "asc") {
      return a[by] < b[by] ? -1 : 1;
    } else {
      return b[by] > a[by] ? -1 : 1;
    }
  };
}

const useStyles = makeStyles({
  items: {
    display: "flex",
    "flex-direction": "column",
  },
});

const Display = ({ category }) => {
  const [page, setPage] = React.useState(1);

  const classes = useStyles();

  const context = React.useContext(GlobalContext);
  const state: GlobalState = context.state as GlobalState;
  const dispatch = context.dispatch;

  let params: BeerParams = {};

  if (category !== "all") {
    params.food = category;
  }

  if (page > 1) {
    params.page = page;
  }

  const { data } = useSWR(
    `/beers?${stringify(params as ParsedUrlQueryInput)}`,
    fetch
  );

  if (!data) {
    return null;
  }

  return (
    <div>
      <div className={classes.items}>
        {data !== undefined && data.length > 0
          ? data
              .sort(sortBeers(state.sort))
              .map((beer: BeerRecord) => (
                <BeerItem key={beer.name} beer={beer} />
              ))
          : "End of results"}
      </div>
      {page > 1 ? <Button onClick={() => setPage(page - 1)}>Prev</Button> : ""}
      {data.length === 25 ? (
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Display;
