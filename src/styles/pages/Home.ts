import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin-top: 60px;
    margin-bottom: 30px;

    width: 350px;
    padding: 20px 0;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    background: #725;
    color: white;
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
    width: 350px;
    border-radius: 7px;

    -webkit-box-shadow: -1px 4px 18px 0px rgba(51, 51, 51, 1);
    -moz-box-shadow: -1px 4px 18px 0px rgba(51, 51, 51, 1);
    box-shadow: -1px 4px 18px 0px rgba(51, 51, 51, 1);
  }

  a {
    color: #725;
  }
`;
