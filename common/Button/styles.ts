import styled from "styled-components";

export const Wrapper = styled.div`
  .button {
    /* pattern */
    padding: 10px;
    margin: 4px 2px;
    width: 150px;
    border-radius: 5px;
    text-align: center;
    text-transform: uppercase;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition-duration: 0.4s;
  }
  .button-pattern {
    color: #a2a2a2;
    background-color: #fff;
    border: 2px solid #a2a2a2;
  }
  .button-pattern:hover {
    background-color: #a2a2a2;
    color: #fff;
  }
`;
