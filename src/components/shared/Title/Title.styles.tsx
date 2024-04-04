"use client";
import styled from "styled-components";

export type StyledTitleProps = {
  color?: string;
  size?: string;
  weight?: string;
  underlined?: boolean;
  underlineColor?: string;
  underlineWidth?: string;
};

export const StyledTitle = styled.span<StyledTitleProps>`
  color: ${({ color }) => color || "#000"};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight || "bold"};
  text-transform: uppercase;
  ${({ underlined, underlineColor, underlineWidth }) =>
    underlined &&
    `&:after {
    content: "";
    display: block;
    width: ${underlineWidth || "30px"};
    height: 5px;
    margin-top: 10px;
    background-color: ${underlineColor || "#f00"} };
  }`}
`;
