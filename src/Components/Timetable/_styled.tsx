import styled, { keyframes, StyledComponent } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }`;
export const TimetableStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100vw;
  top: 50px;
  animation: ${fadeIn} 500ms ease-in;
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
export const TimetableOverflowStyled = styled.div`
  max-height: 70vh;
  overflow-y: auto;
`;
export const TimetableSelectedStopStyled: StyledComponent<
  any,
  any
> = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.5em;
  svg {
    transform: translateY(0.2em);
    fill: ${(props) => (props.favorite ? "goldenrod" : "black")};
    :hover {
      fill: ${(props) =>
        props.limitReached
          ? props.favorite
            ? "goldenrod"
            : "red"
          : "goldenrod"};
      cursor: ${(props) =>
        props.limitReached
          ? props.favorite
            ? "pointer"
            : "not-allowed"
          : "pointer"};
    }
  }
`;
