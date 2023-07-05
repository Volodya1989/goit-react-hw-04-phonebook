import styled from "@emotion/styled";



export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  border: 0.5px solid lightgray;
  width: 250px;
  display: flex;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: black;
  }
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  margin-top: 0.7rem;
  display: inline-block;
  text-align: left;
  transition: all 0.3s;
  transform: translateY(0rem);
`;

