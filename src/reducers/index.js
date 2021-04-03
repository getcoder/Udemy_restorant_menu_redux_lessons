const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false,
      };
    case "MENU_REQUESTED":
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false,
      };
    case "MENU_ERROR":
      return {
        ...state,
        menu: state.menu,
        error: true,
      };
    case "ITEM_ADD_TO_CART": {
      const id = action.payload;
      const newItems = [...state.items];
      const itemIndex = newItems.findIndex((item) => item.id === id);

      if (itemIndex === -1) {
        const item = state.menu.find((item) => item.id === id);
        item.amount = 1;
        newItems.push(item);
        return {
          ...state,
          items: newItems,
          total: state.total + item.price,
        };
      }

      newItems[itemIndex].amount++;
      return {
        ...state,
        items: newItems,
        total: state.total + newItems[itemIndex].price,
      };
    }
    case "REMOVE_ITEM_FROM_CART": {
      const id = action.payload;
      const newItems = [...state.items];
      const itemIndex = newItems.findIndex((item) => item.id === id);
      const [deletedItem] = newItems.splice(itemIndex, 1);
      return {
        ...state,
        items: newItems,
        total: state.total - deletedItem.price * deletedItem.amount,
      };
    }
    case "INC_ITEM_COUNT": {
      const id = action.payload;
      const newItems = [...state.items];
      const itemIndex = newItems.findIndex((item) => item.id === id);
      newItems[itemIndex].amount++;
      return {
        ...state,
        items: newItems,
        total: state.total + newItems[itemIndex].price,
      };
    }
    case "DEC_ITEM_COUNT": {
      const id = action.payload;
      const newItems = [...state.items];
      const itemIndex = newItems.findIndex((item) => item.id === id);
      newItems[itemIndex].amount--;

      if (newItems[itemIndex].amount < 1) {
        const [deletedItem] = newItems.splice(itemIndex, 1);
        return {
          ...state,
          items: newItems,
          total: state.total - deletedItem.price,
        };
      }

      return {
        ...state,
        items: newItems,
        total: state.total - newItems[itemIndex].price,
      };
    }

    default:
      return state;
  }
};

export default reducer;
