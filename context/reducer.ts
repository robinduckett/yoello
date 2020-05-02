import { BeerRecord } from "../interfaces";

export interface GlobalAction {
  type: string;
  payload: any;
}

export interface GlobalState {
  category: string;
  cart: {
    items: BeerRecord[];
  };
  sort: {
    by: string;
    dir: string;
  };
  page: number,
}

let storedCategory: string;
let storedItems: BeerRecord[];

if (typeof localStorage !== 'undefined') {
  storedCategory = localStorage.getItem('category');

  try {
    storedItems = JSON.parse(localStorage.getItem('cart')) as BeerRecord[];
  } catch (e) {
    storedItems = [];
  }
}

export const initialState: GlobalState = {
  category: storedCategory || 'pizza',
  cart: {
    items: storedItems || []
  },
  sort: {
    by: 'name',
    dir: 'asc'
  },
  page: 1
};

export const reducer = (state: GlobalState, action: GlobalAction) => {
  let cart: GlobalState['cart'];

  switch (action.type) {
    case "category":
      const category = { category: action.payload };

      localStorage.setItem('category', action.payload);

      return {
        ...state,
        ...category,
      }
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
    case "page":
      const page = {
        page: action.payload,
      }

      return {
        ...state,
        ...page,
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