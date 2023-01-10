import React from "react";
import { Button, Form, Input } from "antd";
import "./Login.css";
import { Typography } from "antd";
// React hooks
import { useRef,useState  } from 'react';

const Login = () => {
  // Ant Design components
  const { Title } = Typography;
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');
  const onFinish = (values) => {
    console.log("Success:", values);
    // This condition will validate the email and password
    if (
    (values.email === "test_user@meistery.net" ||
    values.email === "test_user2@meistery.net") &&
    values.password === "trial_application"
  ){
    setErrMsg(''); 
  } else {
    // adding the error message 
    setErrMsg('Either your password or login is incorrect');
  }
  errRef.current.focus();
  };
  // showing the errors if the email is not filled
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      {/* Ant Design form */}
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        // style={{ width: "20vw", margin: 0 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
         <Title className="custom__text">Trends</Title>
        {/* <Form.Item wrapperCol={{ span: 24 }}>
         
        </Form.Item> */}
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input className="custom__input" placeholder="Login" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true },
          ]}
        >
          <Input.Password className="custom__input" placeholder="Password" />
        </Form.Item>
        {/* Tag to show error message */}
        <p ref={errRef} style={{color:'red',padding:0,margin: 0}} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button className="custom__input"  type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
