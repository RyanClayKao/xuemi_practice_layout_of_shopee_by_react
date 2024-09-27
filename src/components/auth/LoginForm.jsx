import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { AuthContext } from "./AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { isLogin, loginFn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(isLogin);
    if (isLogin){
      navigate("/");
    }
  }, [isLogin]);

  function handleLogin() {
    // call login api
    loginFn(username, password).then(() => {
      navigate("/");
    });
  }

  return (
    <div>
      <Input
        className="mb-3"
        size="large"
        placeholder="請輸入帳號"
        prefix={<UserOutlined />}
        defaultValue={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        className="mb-3"
        type="password"
        size="large"
        placeholder="請輸入密碼"
        prefix={<LockOutlined />}
        defaultValue={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>登入</Button>
    </div>
  );
};

export default LoginForm;
