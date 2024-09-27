/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../common/Container";

const PageHeader = styled(Header)`
  ${(props) =>
    props.fixed &&
    css`
      z-index: 16;
      position: fixed;
    `}
`;

// function PageHeader({fixed}){
//   let styleObj = {};

//   if (fixed){
//     styleObj = {
//       zIndex: 16,
//       position: "fixed",
//     }
//   }

//   return <Header style={styleObj}/>
// }

export default function DefaultLayout({ fixedHeader, children }) {
  return (
    <div>
      <PageHeader fixed={fixedHeader} />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
