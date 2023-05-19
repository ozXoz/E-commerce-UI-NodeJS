import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
`;

const Wrapper = styled.div`
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  margin-bottom: 10px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: teal;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;

  &:hover {
    background-color: #008080;
  }
`;

const ForgotPasswordLink = styled.a`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  color: teal;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
          <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
