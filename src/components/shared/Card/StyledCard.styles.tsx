"use client";
import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 15px;
  margin-bottom: 20px;

  & div {
    position: relative;
    width: 100%;
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    text-shadow: 1px 2px #000;
  }

  & img {
    width: inherit;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }

  & p {
    flex: 1;
    text-align: center;
    margin: 0px;
  }
`;
