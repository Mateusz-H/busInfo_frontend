import styled, { StyledComponent } from "styled-components";

export const FavBarStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: 90vh;
  background-color: #4caf50;
  z-index: 2;
  padding-top: 8vh;
  .active {
    cursor: not-allowed;
    svg {
      color: white;
    }
  }
`;
export const FavBarItemStyled: StyledComponent<any, any> = styled.div`
  margin-top: 2vh;
  svg {
    width: 48px;
    transition: 500ms all;
    height: 48px;
    color: ${(props) => (props.unactive ? "gray" : "black")};
    :hover {
      color: ${(props) => (props.unactive ? "gray" : "white")};
    }
  }
  cursor: ${(props) => (props.unactive ? "not-allowed" : "pointer")};
`;
