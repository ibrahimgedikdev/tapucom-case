import React from "react";
import styled from 'styled-components';

function ProductItem({product}) {
  return (
    <ProductItemWrapper>
      <Left>
        <Image src={product?.image}></Image>
      </Left>
      <Right>
        <Name>{product?.name}</Name>
        <Description>{product?.description}</Description>
        <Star>
          <Text>3.9</Text>
        </Star>
        <Location>
          <Text>3.7 km</Text>
        </Location>
        <BasketButton>
          <ButtonText>SEPETE EKLE</ButtonText>
        </BasketButton>
      </Right>
    </ProductItemWrapper>
  );
}

export default ProductItem;

const ProductItemWrapper = styled.div`
    display:flex;
    margin-bottom:2.5rem ;
`
const Left = styled.div`
    
`

const Image = styled.img`
    width:75px;
    height:75px;
    object-fit:cover;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.03%, rgba(0, 0, 0, 0) 41.03%, rgba(0, 0, 0, 0.8) 84.62%);
border-radius: 12px;
`
const Right = styled.div`
    margin-left:1rem;
`
const Name = styled.div`
    font-size:1rem;
`
const Description = styled.div`
    margin:0.5rem 0;
    font-size:0.8rem ;
`
const Star = styled.div`
    display:inline-flex;
    margin-left:1rem;
`
const Location = styled.div`
    display:inline-flex;
    margin-left:1rem;
`
const Text = styled.div`
    font-size:0.8rem ;
`
const BasketButton = styled.div`
    margin-top:2rem;
`
const ButtonText = styled.div`
    font-size:0.8rem;
    color:#E82223;
`