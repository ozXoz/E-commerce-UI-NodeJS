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

const Agreement = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;

const PolicyLink = styled.a`
  color: teal;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Row>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </Row>
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Row>
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
          </Row>
          <Agreement>
            <Checkbox required />
            I agree to the <PolicyLink href="/privacy-policy">Privacy Policy</PolicyLink>
          </Agreement>
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
