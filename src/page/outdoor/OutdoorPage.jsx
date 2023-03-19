import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import SideFilter from "../../components/filter/SideFilter";
import { Container, ProductPgSection } from "../../components/layout/Layout";
import ShopProductItem from "../../domain/product/ShopProduct";
import PageTitle from "../../components/title/PageTitle";
import GosubTab from "../../components/tab/GosubTab";
import OutdoorCort from "./OutdoorCortPage";

function Outdoor() {
  return (
    <>
      <ProductPgSection>
        <ProductPageContainer>
          <PageTitle>
            Outdoor<span>(아웃도어 라인)</span>
          </PageTitle>
          <GosubTab idnumber={0}></GosubTab>
          <Switch>
            <Route exact path={"/Helinox-react/outdoorcort"} component={<OutdoorCort />} />
          </Switch>
          {/* <Flex>
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
          </Flex> */}
        </ProductPageContainer>
      </ProductPgSection>
    </>
  );
}

export default Outdoor;

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
