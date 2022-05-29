import { t } from "i18next";
import React from "react";
import styled from "styled-components";
import { useBasket } from "../context/BasketContext";
function Basket() {
  const { items, removeFromBasket } = useBasket();
  const total = items.reduce((acc, obj) => Number(acc) + Number(obj.price), 0);

  return (
    <BasketWrapper>
      <Heading>{t("basket.totalOfProducts")}</Heading>
      {items.length > 0 ? (
        <>
          <Total>{t("basket.total")} : </Total>
          <TaxCargo>{t("basket.taxCargo")} : </TaxCargo>
        </>
      ) : (
        <>
            <Total>{t('basket.emptyBasket')}</Total>
        </>
      )}

      <GeneralTotal>
        {t("basket.generalTotal")} : {total} ₺{" "}
      </GeneralTotal>
    </BasketWrapper>
  );
}

export default Basket;

const BasketWrapper = styled.div``;
const Heading = styled.h3`
  font-size: 1.5rem;
`;
const Total = styled.span`
  display: block;
`;
const TaxCargo = styled.span`
  display: block;
`;
const GeneralTotal = styled.h4`
  font-size: 1.25rem;
`;
