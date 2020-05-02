import { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";

import { BeerRecord } from "../interfaces";
import { Avatar } from "@material-ui/core";
import { GlobalContext } from "../context/global";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  media: {
    marginTop: 10,
    height: 140,
    backgroundSize: "contain",
  },
  avatar: {
    width: "100%",
    height: 200,
  },
  cart: {
    display: "flex",
    "& > *": {
      margin: 10,
    },
  },
});

export const BeerItem = ({ beer }: { beer: BeerRecord }) => {
  const classes = useStyles();
  const { dispatch } = useContext(GlobalContext);

  const handleView = () => {
    dispatch({ type: "view", payload: beer });
  };

  return (
    <div>
      <Card key={beer.name} className={classes.root + " beer"}>
        <CardActionArea onClick={handleView}>
          {beer.image_url ? (
            <CardMedia
              title={beer.name}
              image={beer.image_url}
              className={classes.media}
            />
          ) : (
            <Avatar variant="square" className={classes.avatar}>
              {beer.name.charAt(0)}
            </Avatar>
          )}
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {beer.name}
          </Typography>
        </CardContent>
        <CardActions>
          <div className={classes.cart}>
            <Chip label={`£${beer.abv.toFixed(2)}`} variant="outlined"></Chip>

            <Button
              onClick={() => dispatch({ type: "cart_add", payload: beer })}
              size="small"
              variant="contained"
              color="primary"
            >
              Add to cart
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};
