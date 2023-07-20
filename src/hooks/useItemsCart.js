import { useReducer, useEffect } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "../reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const useItemsCart = () => {
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const hasItems = cartItems.find((i) => i.product.id === product.id);
    if (hasItems) {
      dispatch({
        type: UpdateQuantityProductCart,
        payload: product,
      });
    } else {
      dispatch({
        type: AddProductCart,
        payload: product,
      });
    }
  };
  const handlerDeleteProductCart = (id) => {
    dispatch({
      type: DeleteProductCart,
      payload: id,
    });
  };
  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCart,
  };
};
