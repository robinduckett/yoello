export interface GlobalAction {
  type: string;
  payload: any;
}

export interface GlobalState {
  category: string;
}

let storedCategory: string;

if (typeof localStorage !== 'undefined') {
  storedCategory = localStorage.getItem('category');
}

export const initialState: GlobalState = {
  category: storedCategory || 'pizza'
};

export const reducer = (state: GlobalState, action: GlobalAction) => {
  switch (action.type) {
    case "category":
      const category = action.payload;
      localStorage.setItem('category', category);

      return {
        ...state,
        category,
      }
      break;
    default:
      return state;
  }
}