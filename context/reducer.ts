import { BeerRecord } from "../interfaces";

export interface GlobalAction {
  type: string;
  payload: any;
}

export interface GlobalState {
  cart: {
    items: BeerRecord[];
  };
  sort: {
    by: string;
    dir: string;
  };
}

let storedItems: BeerRecord[];

if (typeof localStorage !== 'undefined') {
  try {
    storedItems = JSON.parse(localStorage.getItem('cart')) as BeerRecord[];
  } catch (e) {
    storedItems = [];
  }
}

export const initialState: GlobalState = {
  cart: {
    items: storedItems || []
  },
  sort: {
    by: 'name',
    dir: 'asc'
  },
};

export const reducer = (state: GlobalState, action: GlobalAction) => {
  let cart: GlobalState['cart'];

  switch (action.type) {
    case "cart_add":
      const cartAdd = {
        cart: {
          items: state.cart.items.concat([action.payload])
        }
      };

      return {
        ...state,
        ...cartAdd,
      }

    case "cart_remove":
      const cartRemove = {
        cart: {
          items: state.cart.items.filter((item) => item.id === action.payload)
        }
      };

      return {
        ...state,
        ...cartRemove,
      }
    case "sort":
      const sort = {
        sort: {
          by: action.payload.by,
          dir: action.payload.dir
        }
      };

      return {
        ...state,
        ...sort,
      }
    default:
      return state;
  }
}