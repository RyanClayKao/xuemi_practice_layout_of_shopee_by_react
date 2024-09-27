import styled from "styled-components";
import DefaultLayout from "../components/layout/DefaultLayout";
import Container from "../components/common/Container";
import LoginForm from "../components/auth/LoginForm";

import ShoppingImage from "../images/shopping.jpg";

const StyledLoginBox = styled.div`
  background-color: white;
`;

const StyledLoginContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 48px 0px;
`



export default function LoginPage() {
  return (
    <DefaultLayout fixedHeader={false}>
      <StyledLoginBox>
        <StyledLoginContainer>
          <div>
            <img src={ShoppingImage} alt="shopping" width="250" />
          </div>
          <LoginForm />
        </StyledLoginContainer>
      </StyledLoginBox>
    </DefaultLayout>
  );
}
