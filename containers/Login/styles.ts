import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Card = styled.div`
  margin: 25px;
  padding: 15px;
  min-height: 70vh;
  min-width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 20px 8px #d0d0d0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  label {
    font-size: 20px;
  }

  input {
    font-size: 18px;
    border-radius: 5px;
    border: 2px solid #a2a2a2;
    height: 35px;
  }

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 16px;
    cursor: pointer;
  }

  p:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  //
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  button {
    font-size: 20px !important;
  }
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
`;
