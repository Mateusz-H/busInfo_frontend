import styled, { StyledComponent } from "styled-components";

export const SearchBarStyled = styled.div`
  display: flex;
  position: absolute;
  top: 10vh;
  flex-direction: column;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;
export const SearchBarInputStyled: StyledComponent<any, any> = styled.input`
  border: 0;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: ${(props) => (props.isVisible ? 0 : "10px")};
  border-bottom-right-radius: ${(props) => (props.isVisible ? 0 : "10px")};
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.15);
  outline: none;
  opacity: 0.8;
  min-width: 320px;
  width: 25vw;
  font-size: 20px;
  font-weight: 600;
  transition: 0.5s all;
  :focus ~ label,
  :valid ~ label {
    opacity: 0;
  }
`;
export const SearchBarFormStyled = styled.form`
  position: relative;
  line-height: 44px;
`;
export const SearchBarLabelStyled = styled.label`
  position: absolute;
  top: 0;
  left: 10px;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: darkseagreen;
  transition: 0.5s all;
  cursor: text;
`;

export const SearchBarListOverflowStyled = styled.div`
  height: 53vh;
  overflow: hidden;
`;
export const SearchBarListStyled: StyledComponent<any, any> = styled.div`
  &.hidden {
    transform: translateY(-53vh);
  }
  transition: 0.5s transform;
  min-width: 320px;
  width: 25vw;
  padding: 10px 10px 10px 10px;
  font-size: 15px;
  background-color: white;
  margin: 0;
  height: ${(props) => Math.min(50, props.numberOfElements * 5)}vh;
  min-height: 5vh;
  max-height: 53vh;
  :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  overflow: ${(props) => (props.numberOfElements >= 5 ? "auto" : "hidden")};
  a {
    color: black;
    text-decoration: none;
  }
`;
export const SearchBarListElementStyled = styled.div`
  display: block;
  padding: 10px;
  border-radius: 10px;
  height: 2.5vh;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
