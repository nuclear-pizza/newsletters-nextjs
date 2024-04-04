"use client";
import styled from "styled-components";

export type StyledButtonProps = {
  color?: string;
  background?: string;
  borderColor?: string;
  width?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: content-box;
  width: ${({ width }) => width || "100px"};
  color: ${({ color }) => color};
  background-color: ${({ background }) => background};
  font-weight: 600;
  border-radius: 20px;
  border-style: none;
  padding: 8px 16px;
`;
