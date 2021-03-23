import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }`;
export const TimetableStyled = styled.div`
        position: absolute;
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100vw;
  top:50px;
  animation: ${fadeIn} 500ms ease-in;
  height: 100vh;
  table {
    border-collapse: collapse;
    max-height: 50vh;
  }
  td,
  th {
    border: 1px solid #ddd;
    padding: 7px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }
`;
