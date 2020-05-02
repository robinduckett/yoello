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
});

export const BeerItem = ({ beer }: { beer: BeerRecord }) => {
  const classes = useStyles();

  return (
    <Card key={beer.name} className={classes.root + " beer"}>
      <CardActionArea>
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
        <Chip label={`£${beer.abv.toFixed(2)}`} variant="outlined"></Chip>

        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
