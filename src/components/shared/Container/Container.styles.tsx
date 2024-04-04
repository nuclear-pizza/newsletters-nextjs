"use client";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  max-width: 60rem;
  margin: 30px auto 30px;
  padding: 0px 10px;

  @media (min-width: 641px) and (max-width: 960px) {
    max-width: 40rem;
  }
`;
