// /* eslint-disable*/
import React from 'react';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AnimationContainer, Background, Container, Content,
} from './styles';
import { signUpThunk } from '../../store/modules/user/thunks';
import Logo from '../../assets/images/logoDesktop.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Signup() {
  const { user } = useSelector((state) => state.user);

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('Email inválido!').required('Campo obrigatório!'),
    password: yup
      .string()
      .min(6, 'Mínimo de 6 dígitos')
      .required('Campo obrigatório!'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas diferentes')
      .required('Campo obrigatório!'),
    terms: yup.boolean().isTrue('Você não aceitou os termos de uso!'),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (registerData) => {
    console.log('dei o dispatch');
    dispatch(signUpThunk(registerData));
  };

  return (
    <Container>
      {/* {console.log(user)} */}
      {Object.keys(user).length !== 0 && <Redirect to="/login" />}
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section>
              <Link to="/login">
                <img src={Logo} alt={Logo} />
              </Link>
              <h2>MY PLANT</h2>
              <h3>Cadastro</h3>
            </section>
            <Input
              icon={FiUser}
              placeholder="Seu nome"
              name="name"
              register={register}
              error={errors.name?.message}
            />
            <Input
              icon={FiMail}
              placeholder="Seu melhor email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              icon={FiLock}
              placeholder="Uma senha bem segura"
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <Input
              icon={FiLock}
              placeholder="Confirmação da senha"
              type="password"
              name="passwordConfirm"
              register={register}
              error={errors.passwordConfirm?.message}
            />
            <div>
              <input type="checkbox" {...register('terms')} />
              <p>
                Eu li e aceito os
                {' '}
                <Link to="/login">termos de uso</Link>
              </p>
            </div>
            <span>{errors.terms?.message}</span>
            <Button type="submit">Cadastrar</Button>
            <p>
              Já possui uma conta?
              <Link to="/login">Entrar</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Signup;
