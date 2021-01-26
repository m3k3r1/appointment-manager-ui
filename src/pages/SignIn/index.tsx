import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Background, Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Login</h1>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
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
