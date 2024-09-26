import styled from "styled-components";
import Container from "../common/Container";

const StyledFooter = styled.footer`
  background-color: #fbfbfb;
  padding: 40px 0px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container>This is footer</Container>
    </StyledFooter>
  );
}
