import React, { useEffect, useContext } from "react";
import MenuListItem from "../menu-list-item/menu-list-item";
import { connect } from "react-redux";
import { menuLoaded, menuRequsted, menuError, addToCart } from "../../actions";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import { ServiceContext } from "../resto-service-context/resto-service-context";

import "./menu-list.scss";

const MenuList = ({
  menuItems,
  menuLoaded,
  menuError,
  menuRequsted,
  loading,
  error,
  addToCart,
}) => {
  const RestoService = useContext(ServiceContext);

  useEffect(() => {
    menuRequsted();
    RestoService.getMenuItems()
      .then((res) => menuLoaded(res))
      .catch((err) => menuError());
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ul className="menu__list">
      {menuItems.map((item) => {
        return (
          <MenuListItem
            key={item.id}
            menuItem={item}
            onAddToCart={() => addToCart(item.id)}
          />
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  menuLoaded,
  menuRequsted,
  menuError,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
