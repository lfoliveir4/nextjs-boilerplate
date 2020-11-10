import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    input {
      margin-top: 60px;
      margin-bottom: 30px;
      margin-right: 30px;

      width: 200px;
      padding: 20px 40px;
      border-radius: 7px;
      border: none;
      cursor: pointer;

      color: #333;

      @media (max-width: 520px) {
        width: 100%;
      }
    }

    button {
      margin-top: 60px;
      margin-bottom: 30px;

      width: 200px;
      padding: 20px 0;
      border-radius: 7px;
      border: none;
      cursor: pointer;
      background: #725;
      color: white;

      @media (max-width: 520px) {
        width: 100%;
      }
    }

    @media (max-width: 520px) {
      padding: 0 30px;
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  li {
    margin: 30px 0;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    width: 500px;
    border-radius: 7px;

    -webkit-box-shadow: -1px 4px 18px 0px rgba(51, 51, 51, 1);
    -moz-box-shadow: -1px 4px 18px 0px rgba(51, 51, 51, 1);
    box-shadow: -1px 4px 18px 0px rgba(51, 51, 51, 1);

    @media (max-width: 520px) {
      width: 100%;
    }
  }

  a {
    color: #725;
  }
`;
