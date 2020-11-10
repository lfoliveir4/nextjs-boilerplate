import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const ContainerDetailProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 45%;
  margin-left: 50px;

  div {
    margin: 30px 0;
  }

  @media (max-width: 520px) {
    margin-top: 60px;
  }
`;
