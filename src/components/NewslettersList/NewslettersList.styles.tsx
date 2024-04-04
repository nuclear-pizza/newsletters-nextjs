"use client";
import styled from "styled-components";

export const StyledNewslettersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 15px;

  @media (max-width: 640px) {
    & div {
      flex: 1 1 100%;
    }
  }
`;
