import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Background, Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Login</h1>
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
        <a href="lkdfjg">Forgot Password</a>
      </form>
      <a href="lkdfjg">
        <FiLogIn /> Create Account
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
