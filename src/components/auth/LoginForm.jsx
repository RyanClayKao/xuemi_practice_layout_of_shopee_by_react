import { Input, Button } from "antd";

import { UserOutlined } from '@ant-design/icons';

const LoginForm = () => {
  return (
    <div>
      <Input className="mb-3" size="large" placeholder="請輸入帳號" prefix={<UserOutlined />} />
      <Input className="mb-3" size="large" placeholder="請輸入密碼" prefix={<UserOutlined />} />
      <Button>登入</Button>
    </div>
  )
}

export default LoginForm;