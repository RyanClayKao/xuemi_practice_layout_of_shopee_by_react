/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../common/Container";
import ScrollToTop from "../common/ScrollToTop";

const PageHeader = styled(Header)`
  ${(props) =>
    (props.fixed && props.fixed === "true" ) &&
    css`
      z-index: 16;
      position: fixed;
    `}
`;

export default function DefaultLayout({ fixedHeader = false, children }) {
  return (
    <div>
      <ScrollToTop />
      <PageHeader fixed={fixedHeader.toString()} />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
