import './LogIn.css';
import { Button, Checkbox, Form, Input } from 'antd';
import React, {useState} from 'react';

const LogIn = () => {

  const [message, setMessage] = useState(['','', '']);

  const onFinish = (values) => {
  
    const json = JSON.stringify(
               {
                email: values.useremail,
                password: values.password
              })

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json
    };
     fetch('https://reqres.in/api/login', requestOptions)
        .then(response => {
          if(response.ok){
            return response.json();
          }
          setMessage(['error login', 'red', 'msg']);
          removeMsg();
        })
        .then(data => {
           console.log(data, 'data')
           if(data !== undefined){
              setMessage(['sucess', 'green', 'msg'])
              removeMsg();
           }
        });

  };

   const removeMsg = () => {
     setTimeout(() => {
       setMessage(['', '']);
     }, 3000)
   }

  return (
    <div className='login'>
        <div>
          <h2>Welcome back!</h2>
          <p>Sub-title text goes here</p>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            >

        <Form.Item
          name="useremail"
          rules={[
           {
             required: true,
             message: 'Please input your email!',
           },
         ]}
       >
        <Input placeholder="User Email" type='email'/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input type="password" placeholder="Password"/>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block>
          Login
        </Button>
      </Form.Item>

      <Form.Item>

        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className='chek'>Remember me</Checkbox>
        </Form.Item>
        
          <a className="login-form-forgot chek" href="#">
            Forgot password
          </a>
      </Form.Item>
      
    </Form>
         <div style={{color: 'white', backgroundColor: message[1]}} className={message[2]}>{message[0]}!</div>
        </div>
            
        <div className='login_img msg'>
          hello
        </div>
    </div>
    
  );
};

export default LogIn;
