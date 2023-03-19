import React from "react";
import styled from "styled-components";
import SideFilter from "../../components/filter/SideFilter";
import { Container, ProductPgSection } from "../../components/layout/Layout";
import ShopProductItem from "../../domain/product/ShopProduct";
import PageTitle from "../../components/title/PageTitle";
import GosubTab from "../../components/tab/GosubTab";

function OutdoorCort() {
  return (
    <>
      <ProductPgSection>
        <ProductPageContainer>
          <PageTitle>
            Outdoor<span>(Chair)</span>
          </PageTitle>
          <GosubTab idnumber={0}></GosubTab>
          <Flex>
            <SideFilter></SideFilter>
            <ShopProductRepeat>
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
              <ShopProductItem />
            </ShopProductRepeat>
          </Flex>
        </ProductPageContainer>
      </ProductPgSection>
    </>
  );
}

export default OutdoorCort;

const ProductPageContainer = styled(Container)`
  padding: 0 50px;
  width: 100%;
  margin: 0 0;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ShopProductRepeat = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-left: 50px;
`;
