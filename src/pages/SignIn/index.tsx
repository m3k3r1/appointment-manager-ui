import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as yup from 'yup';
import { FormHandles } from '@unform/core';
import { Background, Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, signIn } = useAuth();
  const { addToast } = useToast();
  console.log(user);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = yup.object().shape({
          email: yup
            .string()
            .required('Email is required')
            .email('Type a valid email'),
          password: yup.string().required('Password is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email: data.email, password: data.password });
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Invalid credentials',
            description: 'Password or email invalid',
          });
        }
      }
    },
    [signIn, addToast],
  );
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
        <a href="lkdfjg">
          <FiLogIn /> Create Account
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
