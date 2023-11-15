
//import logo from './logo.svg';
import './App.css';
import { Button, Checkbox, Form, Input } from 'antd';
import React, {useState} from "react";
import styled from 'styled-components';

const MyModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;

    p {
      margin-bottom: 10px;
      color: black;
      text-align: left;
    }
  }
`;



const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function App() {
    const [show, setShow] = useState(false);
    const [inputs, setInputs] = useState({ username: '', eposta: '', password: '' });

    const handleInputs = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    // const handleCheck=(check)=>{
    //     if(!check){
    //     }
    //
    // }
    const closeModal = () => {
        setShow(false);
    };

  return (
    <div className="App">
      <header className="App-header">
          <Form
              name="basic"
              labelCol={{
                  span: 8,
              }}
              wrapperCol={{
                  span: 16,
              }}
              style={{
                  maxWidth: 600,

              }}
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
          >
              <Form.Item
                  label="Username"
                  name="username"
                  id={"uName"}
                  rules={[
                      {
                          required: true,
                          message: 'Please input your username!',
                      },
                      {
                          min:5,
                          max:20,
                          message:"username must be between 5 and 20 characters!"
                      }
                  ]}
              >
                  <Input  name="username"  onChange={handleInputs}/>
              </Form.Item>

              <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your password!',
                      },
                      {
                          min:8,
                          message:"Password must be at least 8 characters!"
                      }
                  ]}
              >
                  <Input.Password name="password"   onChange={handleInputs}/>
              </Form.Item>

              <Form.Item
                  label="E-posta"
                  name="eposta"
                  rules={[
                      {
                          type: 'email',
                          message: 'Please enter a valid email address',
                      },
                      {
                          required: true,
                          message: 'Please enter your email address!',
                      },
                  ]}
              >
                  <Input name="eposta" onChange={handleInputs}/>
              </Form.Item>

              <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                      offset: 8,
                      span: 16,
                  }}
              >
                  <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                  wrapperCol={{
                      offset: 8,
                      span: 16,
                  }}
              >
                  <Button type="primary" htmlType="submit" onClick={()=>setShow(true)}>
                      Submit
                  </Button>
              </Form.Item>
          </Form>
          {show && <MyModal>
              <div>
                  <p>UserName -> {inputs.username}</p>
                  <p>Password -> {inputs.password}</p>
                  <p>E-mail -> {inputs.eposta}</p>
                  <Button type="primary" onClick={closeModal}>Close</Button>
              </div>
          </MyModal>}
      </header>
    </div>
  );
}

export default App;
