import { stringify, ParsedUrlQueryInput } from "querystring";

import * as React from "react";
import useSWR, { useSWRPages } from "swr";

import fetch from "../libs/fetch";

import { GlobalContext } from "../context/global";
import { GlobalState } from "../context/reducer";
import { BeerRecord, BeerParams } from "../interfaces";

function sortBeers({ by, dir }) {
  return function (a: any, b: any) {
    console.log(a[by]);
    if (dir === "asc") {
      return a[by] < b[by] ? -1 : 1;
    } else {
      return b[by] > a[by] ? -1 : 1;
    }
  };
}

const BeerItem = ({ beer }) => (
  <div key={beer.name} className="beer">
    {beer.name}
  </div>
);

const Display = () => {
  const context = React.useContext(GlobalContext);
  const state: GlobalState = context.state as GlobalState;
  const dispatch = context.dispatch;

  let params: BeerParams = {};

  if (state.category !== "all") {
    params.food = state.category;
  }

  if (state.page > 1) {
    params.page = state.page;
  }

  const { data } = useSWR(
    `/beers?${stringify(params as ParsedUrlQueryInput)}`,
    fetch
  );

  if (!data) {
    return null;
  }

  console.log(state);

  return (
    <div>
      <div className="items">
        {data !== undefined && data.length > 0
          ? data
              .sort(sortBeers(state.sort))
              .map((beer: BeerRecord) => (
                <BeerItem key={beer.name} beer={beer} />
              ))
          : "End of results"}
      </div>
      {state.page > 1 ? (
        <button
          onClick={() => dispatch({ type: "page", payload: state.page - 1 })}
        >
          Prev
        </button>
      ) : (
        ""
      )}
      {data.length === 25 ? (
        <button
          onClick={() => dispatch({ type: "page", payload: state.page + 1 })}
        >
          Next
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Display;
