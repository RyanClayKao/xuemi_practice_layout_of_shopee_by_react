/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Header from "./Header";

const PageHeader = styled.div`
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
    `}
`;

export default function DefaultLayout({ fixedHeader, children }) {
  return (
    <div>
      <PageHeader fixed={fixedHeader}>
        <Header />
      </PageHeader>
      {children}
      <footer>This is footer</footer>
    </div>
  );
}
