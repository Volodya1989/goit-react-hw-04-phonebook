import styled from "@emotion/styled";

export const Form = styled.form`
  display: block;
`;

export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  border: 0.5px solid lightgray;
  width: 300px;
  display: block;
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

export const Button = styled.button`
   text-transform: capitalize;
  background: linear-gradient(to bottom right, #009FFD, #2A2A72);
  border: 0;
  display:block;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  margin-left:auto;
  margin-right:auto;
  margin-top:20px;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  &:not([disabled]):focus {
  box-shadow: 0 0 .15rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem #009FFD, .125rem .125rem 0.5rem #2A2A72;
}
&:not([disabled]):hover {
  box-shadow: 0 0 .15rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem #009FFD, .125rem .125rem 0.5rem #2A2A72;
}
}
`;
