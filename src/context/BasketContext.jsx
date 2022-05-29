import React, { createContext, useState, useEffect, useContext } from "react";
import { toastError, toastSuccess } from "../constant/toastify";
import { t } from 'i18next';

const BasketContext = createContext();

const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBasket);


  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const addToBasket = (data, findBasketItem) => {
    if (!findBasketItem) {
       
    toastSuccess(t('basket.addBasketMessage'))
    return setItems((items) => [data, ...items]);
    }
    const filtered = items.filter((item) => item.id !== findBasketItem.id);
    setItems(filtered);
  };

  const removeFromBasket = (item_id) => {
    const filtered = items.filter((item) => item.id !== item_id);
    setItems(filtered);
    toastError(t('basket.deleteBasketMessage'));
  }

//   const emptyBasket = () => {
//     setItems([]);
//   }

  const values = {
    items,
    setItems,
    addToBasket,
    removeFromBasket,
    // emptyBasket
  };
  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
