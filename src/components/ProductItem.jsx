import React from "react";
import styled from "styled-components";
import { useBasket } from "../context/BasketContext";
import BasketIcon from "./icons/Basket";
import StarIcon from "./icons/Star";
import LocationIcon from "./icons/Location";

import { t } from "i18next";

function ProductItem({ product }) {
  const { items, addToBasket, removeFromBasket } = useBasket();

  const findBasketItem = items.find(
    (basket_item) => basket_item.id === product.id
  );

  return (
    <ProductItemWrapper>
      <Left>
        <Image src="image.png"></Image>
      </Left>
      <Right>
        <Name>{product?.name}</Name>
        <Description>{product?.description}</Description>
        <Price>{product?.price} ₺</Price>
        <Duration>
          <Star>
            <StarIcon />
            <Text>3.9</Text>
          </Star>
          <Location>
            <LocationIcon />
            <Text>3.7 km</Text>
          </Location>
        </Duration>
        <BasketButton onClick={() => addToBasket(product, findBasketItem)}>
          <BasketIcon />
          <ButtonText>
            {findBasketItem
              ? `${t("basket.removeBasket")}`
              : `${t("basket.addBasket")}`}
          </ButtonText>
        </BasketButton>
      </Right>
    </ProductItemWrapper>
  );
}

export default ProductItem;

const ProductItemWrapper = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #F1F3F5;
  padding-bottom:1rem;
`;
const Left = styled.div``;

const Image = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 41.03%,
    rgba(0, 0, 0, 0) 41.03%,
    rgba(0, 0, 0, 0.8) 84.62%
  );
  border-radius: 12px;
  filter: drop-shadow(0px 10px 15px #C8C9CD);
`;
const Right = styled.div`
  margin-left: 1rem;
`;
const Name = styled.div`
  font-size: 1rem;
`;
const Description = styled.div`
  margin: 0.5rem 0;
  font-size: 0.8rem;
`;
const Price = styled.h6`
  font-size:1rem;
  margin:0.25rem 0 0.4rem;
`;
const Star = styled.div`
  display: inline-flex;
  align-items:center;
  margin-left: 1rem;
`;
const Location = styled.div`
  display: inline-flex;
  align-items:center;
  margin-left: 1rem;
`;
const Text = styled.div`
  font-size: 0.8rem;
  margin-left:0.25rem;
`;
const BasketButton = styled.div`
  cursor: pointer;
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;
const ButtonText = styled.div`
  font-size: 0.8rem;
  color: #e82223;
  margin-left: 0.25rem;
  font-weight: 700;
`;

const Duration = styled.div`
  display:flex;
  align-items:center;
`