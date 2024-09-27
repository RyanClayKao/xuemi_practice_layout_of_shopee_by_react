import styled from "styled-components";
import DefaultLayout from "../components/layout/DefaultLayout";
import Container from "../components/common/Container";
import { Input, Button } from "antd";

import { UserOutlined } from '@ant-design/icons';

import ShoppingImage from "../images/shopping.jpg";

const StyledLoginBox = styled.div`
  background-color: white;
`;

const StyledLoginContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 48px 0px;
`

const LoginForm = () => {
  return (
    <div>
      <Input size="large" placeholder="請輸入帳號" prefix={<UserOutlined />} />
      <Input size="large" placeholder="請輸入密碼" prefix={<UserOutlined />} />
      <Button>登入</Button>
    </div>
  )
}

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
