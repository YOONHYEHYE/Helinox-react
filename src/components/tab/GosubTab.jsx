import React, { useState } from "react";
import styled, { css } from "styled-components";
import { mediaMax } from "../../util/MediaQurey";
import { HEADER_MENU } from "../../util/constants/constant";
import { Link } from "react-router-dom";

function GosubTab({ idnumber, onChange }) {
  // const [pageChange, setPageChange] = useState(HEADER_MENU);
  // const goPage = (index) => {
  //   const newTab = HEADER_MENU.lnbmenu.map((lnbitem) => (lnbitem.id === index ? { ...lnbitem, tab: true } : { ...lnbitem, tab: false }));
  //   onChange(newTab);
  // };
  const [pageChange, setPageChange] = useState(HEADER_MENU);
  const goPage = (idx) => {
    const newArr = Array(idx.length).fill(false);
    newArr[idx] = true;
    setPageChange(newArr);
  };
  return (
    <GoPagemenu>
      {HEADER_MENU.map(
        (item) =>
          item.id === idnumber &&
          item.lnbmenu.map((lnbitem) => (
            <GoPageButton key={lnbitem.id} tabOn={lnbitem.tab} onClick={() => goPage(lnbitem.id)}>
              <Link to={lnbitem.url}>{lnbitem.submenu}</Link>
              <ProductNum>{lnbitem.count}</ProductNum>
            </GoPageButton>
          ))
      )}
    </GoPagemenu>
  );
}

export default GosubTab;

const GoPagemenu = styled.ul`
  ${({ theme }) => theme.common.flexLeft};
  width: fit-content;
  margin: 0 auto 40px;
`;

const GoPageButton = styled.li`
  ${({ theme }) => theme.common.flexBtween};
  margin-right: 10px;
  min-width: 80px;
  padding: 0 10px;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  color: ${({ theme }) => theme.colors.deepgray};
  border-radius: 20px;
  a {
    ${({ theme }) => theme.common.flexCenter};
    width: 100%;
    height: 100%;
  }
  ${({ tabOn }) =>
    tabOn &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    `};
`;

const ProductNum = styled.span`
  margin-left: 10px;
`;
