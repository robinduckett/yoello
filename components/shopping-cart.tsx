import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { GlobalContext } from "../context/global";
import Modal from "@material-ui/core/Modal";
import { Paper, IconButton, TableFooter } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { BeerRecord } from "../interfaces";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 9,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    width: "100%",
  },
}));

function getTotal(items: BeerRecord[]) {
  return (
    items.map((i) => i.abv * 100).reduce((acc, cur) => (acc += cur), 0) / 100
  );
}

export default () => {
  const classes = useStyles();
  const { state } = React.useContext(GlobalContext);

  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.fab}>
      <Badge
        badgeContent={state.cart.items.length}
        color="error"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Modal
          className={classes.modal}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Paper className={classes.paper}>
            <Typography variant="h4">Shopping Cart</Typography>

            <TableContainer component={Paper} className={classes.table}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.cart.items.map((item) => {
                    return (
                      <TableRow key={item.name}>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell align="right">
                          £{item.abv.toFixed(2)}
                        </TableCell>
                        <TableCell align="right">
                          <IconButton>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={0}>Total</TableCell>
                    <TableCell align="right">
                      {getTotal(state.cart.items).toFixed(2)}
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Paper>
        </Modal>

        <Fab onClick={() => setOpen(true)} hidden={!open}>
          <ShoppingBasketIcon />
        </Fab>
      </Badge>
    </div>
  );
};
