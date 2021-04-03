const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED",
    payload: newMenu,
  };
};

const menuRequsted = () => {
  return {
    type: "MENU_REQUESTED",
  };
};

const menuError = () => {
  return {
    type: "MENU_ERROR",
  };
};

const addToCart = (id) => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: id,
  };
};

const removeFromCart = (id) => {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: id,
  };
};

const incItemCount = (id) => {
  return {
    type: "INC_ITEM_COUNT",
    payload: id,
  };
};

const decItemCount = (id) => {
  return {
    type: "DEC_ITEM_COUNT",
    payload: id,
  };
};

export {
  menuLoaded,
  menuRequsted,
  menuError,
  addToCart,
  removeFromCart,
  incItemCount,
  decItemCount,
};
