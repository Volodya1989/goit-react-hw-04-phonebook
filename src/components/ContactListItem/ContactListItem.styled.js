import styled from "@emotion/styled";
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: transform 0.4s;

  &:hover {
    transition: transform 0.4s;
    transform: scale(1.05);
    background: linear-gradient(to bottom right, #e8dbfc, #f8f9d2);
  }
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Span = styled.span`
  display: flex;
  margin-right: 10px;
`;

export const Phone = styled.span`
  display: block;
  margin-left: 5px;
`;

export const List = styled.ul`
  padding-right: 40px;
`;

export const DeleteBtn = styled.button`
   text-transform: capitalize;
  background: linear-gradient(to bottom right, #FF0000, #FF7878);
  border: 0;
  display:block;
  border-radius: 12px;
  width:100px;
  color: #FFFFFF;
  cursor: pointer;
  margin-left:auto;
  margin-right:20px;
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
  box-shadow: 0 0 .15rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem #FF0000, .125rem .125rem 0.5rem #FF7878;
}
&:not([disabled]):hover {
  box-shadow: 0 0 .15rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem #FF0000, .125rem .125rem 0.5rem #FF7878;
}
}
`;
