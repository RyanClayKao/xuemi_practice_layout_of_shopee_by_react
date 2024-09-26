/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../common/Container";

const PageHeader = styled(Header)`
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
    `}
`;

export default function DefaultLayout({ fixedHeader, children }) {
  return (
    <div>
      <PageHeader fixed={fixedHeader} />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
