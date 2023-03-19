import React from "react";
import styled, { css } from "styled-components";
import { mediaMax } from "../../util/MediaQurey";

const ButtonStyle = {
  moreround: css`
    text-align: center;
    padding: 5px 15px;
    border-radius: 50%;
    background-color: transparent;
  `,
  viewmore: css`
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 130%;
      height: 4px;
      ${mediaMax.md} {
        width: 100%;
      }
    }
  `,
  roundBtn:css`
    
  `
};

function Button({ disabled, children, styletype, border, fontsize, background, color, afterbackground, hoverbackground, hovercolor }) {
  const styleType = ButtonStyle[styletype];
  return (
    <StyleButton
      type="button"
      disabled={disabled}
      styleType={styleType}
      border={border}
      fontsize={fontsize}
      color={color}
      background={background}
      afterbackground={afterbackground}
      hoverbackground={hoverbackground}
      hovercolor={hovercolor}
    >
      {children}
    </StyleButton>
  );
}

export default Button;

const StyleButton = styled.button`
  position: relative;
  cursor: pointer;
  ${(props) => props.styleType}
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  &:after {
    background: ${(props) => props.afterbackground};
  }
`;
