import React from "react";
import styled from "styled-components";

function PageTitle({ children }) {
  return (
    <>
      <TitleTxt>{children}</TitleTxt>
      <Underline />
    </>
  );
}

export default PageTitle;

const TitleTxt = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  span {
    font-size: 24px;
    font-weight: 400;
  }
`;

const Underline = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
`;
