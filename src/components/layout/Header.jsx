/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #d1011c;
  width: 100vw;
  height: 200px;
`;

export default function Header() {
  return <StyledHeader>This is header.</StyledHeader>;
}
