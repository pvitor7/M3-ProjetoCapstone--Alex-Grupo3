// /* eslint-disable*/
import React from 'react';

import { FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AnimationContainer, Background, Container, Content,
} from './styles';
import Logo from '../../assets/images/logoDesktop.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { logInThunk } from '../../store/modules/user/thunks';

function Login() {
  const { token } = useSelector((state) => state.user);

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido!').required('Campo obrigatório!'),
    password: yup
      .string()
      .min(6, 'Mínimo de 6 dígitos')
      .required('Campo obrigatório!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(logInThunk(data));
  };

  return (
    <Container>
      {token && <Redirect to="/personalPlants" />}
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section>
              <Link to="/">
                <img src={Logo} alt={Logo} />
              </Link>
              <h2>MY PLANT</h2>
              <h3>Busque, conheça, cuide!</h3>
            </section>
            <h4>Já possui uma conta?</h4>
            <Input
              icon={FiMail}
              placeholder="Seu email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              icon={FiLock}
              placeholder="Sua senha"
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <Button type="submit">Entrar</Button>
            <p>Ainda não possui conta?</p>
            <Link to="/signup">
              <Button GreenSchema>Cadastrar</Button>
            </Link>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
