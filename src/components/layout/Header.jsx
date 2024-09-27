/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import Container from "../common/Container";
import Logo from "../../images/logo.png";

// ant design
import { Input } from "antd";
const { Search } = Input;

// ant design icons
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const StyledHeader = styled.header`
  background-color: #d1011c;
  width: 100vw;
  padding: 16px 0px;
`;

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigator = styled.div`
  a {
    margin: 0px 4px;
    color: white;
    text-decoration: none;
  }
`;

const Toolbar = styled.div`
  a {
    margin: 0px 6px;
    color: white;
    text-decoration: none;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header({ ...props }) {
  const navigate = useNavigate();
  const { isLogin, logoutFn} = useContext(AuthContext);

  function onSearch() {}

  function handleLogout(){
    logoutFn();
    navigate('/login', { replace: true});
  }

  return (
    <StyledHeader {...props}>
      <Container>
        <StyledHeaderSection>
          <Navigator>
            <a href="#">蝦皮購物</a>
            <a href="#">下載</a>
            <a href="#">追蹤我們</a>
            <a href="#">部落格</a>
          </Navigator>
          <Toolbar>
            <a href="#">通知</a>
            <a href="#">幫助中心</a>
            {isLogin ? (
              <div>                
                <Link to="/user">Ryan</Link>
                <span onClick={handleLogout}>登出</span>
              </div>
            ) : (
              <Link to="/login">登入/註冊</Link>
            )}
          </Toolbar>
        </StyledHeaderSection>
        <StyledHeaderSection>
          <Link to="/">
            <img src={Logo} alt="logo" height="48" style={{ height: "48px" }} />
          </Link>
          <Box>
            <Search
              style={{ marginRight: 8 }}
              placeholder="在商城搜尋"
              onSearch={onSearch}
              enterButton
            />
            <Link to="/cart">
              <ShoppingCartOutlined style={{ fontSize: 28, color: "white" }} />
            </Link>
          </Box>
        </StyledHeaderSection>
      </Container>
    </StyledHeader>
  );
}
