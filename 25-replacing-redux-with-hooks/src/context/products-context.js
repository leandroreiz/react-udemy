import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFavorite: () => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setProductsList((currentProdList) => {
      const prodIndex = currentProdList.findIndex(
        (prod) => prod.id === productId
      );

      const newFavState = !currentProdList[prodIndex].isFavorite;

      const updatedProdList = [...currentProdList];

      updatedProdList[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavState,
      };

      return updatedProdList;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
