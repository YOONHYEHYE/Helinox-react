import React from "react";
import styled from "styled-components";
import SideFilter from "../../components/filter/SideFilter";
import { Container, ProductPgSection } from "../../components/layout/Layout";
import ShopProductItem from "../../domain/product/ShopProduct";
import PageTitle from "../../components/title/PageTitle";
import GosubTab from "../../components/tab/GosubTab";
import { Route } from "react-router-dom";
import OutdoorCort from "./OutdoorCortPage";

function OutdoorChair() {
  return (
    <>
      {/* <ProductPgSection>
        <ProductPageContainer>
          <PageTitle>
            Outdoor<span>(아웃도어)</span>
          </PageTitle>
          <GosubTab idnumber={0}></GosubTab>
          <Route path="/Helinox-react/outdoorchair" exact render={<OutdoorChair/>}></Route> */}
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
      {/* </ProductPageContainer>
      </ProductPgSection> */}
    </>
  );
}

export default OutdoorChair;

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
