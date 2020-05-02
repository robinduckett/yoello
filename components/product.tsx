import { BeerRecord } from "../interfaces";

import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Chip from "@material-ui/core/Chip";

import Button from "@material-ui/core/Button";

import { GlobalContext } from "../context/global";

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    "& div": {
      padding: "10px 0px",
    },
  },
  img: {
    height: 200,
    margin: "0 auto",
    display: "block",
  },
  avatar: {
    height: 200,
    width: "100%",
  },
  cart: {
    display: "flex",
    "& > *": {
      margin: 10,
    },
  },
});

export default ({ item }: { item: BeerRecord }) => {
  const classes = useStyles();
  const { dispatch } = React.useContext(GlobalContext);

  return (
    <div className={classes.root}>
      <div>
        <IconButton onClick={() => dispatch({ type: "view", payload: null })}>
          <ArrowBackIcon />
        </IconButton>
      </div>

      {item.image_url ? (
        <div>
          <img alt={item.name} src={item.image_url} className={classes.img} />
        </div>
      ) : (
        <div>
          <Avatar variant="square" className={classes.avatar}>
            {item.name.charAt(0)}
          </Avatar>
        </div>
      )}

      <div>
        <Typography variant="h3">{item.name}</Typography>
        <Typography variant="caption">{item.tagline}</Typography>
        <div className={classes.cart}>
          <Chip label={`£${item.abv.toFixed(2)}`} variant="outlined"></Chip>

          <Button
            onClick={() => dispatch({ type: "cart_add", payload: item })}
            size="small"
            variant="contained"
            color="primary"
          >
            Add to cart
          </Button>
        </div>
      </div>

      <Typography variant="overline">Information</Typography>
      <div>ABV: {item.abv}</div>

      <Typography variant="overline">Description</Typography>
      <div>{item.description}</div>

      <Typography variant="overline">Goes great with</Typography>
      <div>
        {item.food_pairing.map((pairing) => (
          <Typography variant="body2" key={pairing}>
            {pairing}
          </Typography>
        ))}
      </div>
    </div>
  );
};
