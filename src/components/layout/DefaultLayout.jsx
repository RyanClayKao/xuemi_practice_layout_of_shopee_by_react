/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../common/Container";
import ScrollToTop from "../common/ScrollToTop";

const PageHeader = styled(Header)`
  ${(props) =>
    props.fixed &&
    css`
      z-index: 16;
      position: fixed;
    `}
`;

export default function DefaultLayout({ fixedHeader, children }) {
  return (
    <div>
      <ScrollToTop />
      <PageHeader fixed={fixedHeader} />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
