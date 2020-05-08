import React, { useState } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import LogoLarge from '../../assets/Icon/LogoLarge.svg';
import AppStopre from '../../assets/Img/appStore.png';
import GooglePlay from '../../assets/Img/googlePlay.png';
import InstaExample from '../../assets/Img/phone.png';
import {
	BtnSingUp,
	BtnContainer,
	BtnFacebook,
} from '../../components/Button/styles';

import firebase from '../../config/fireConnection';
import 'firebase/auth';

import * as S from './styles';

export default function Register() {
	const [email, setEmail] = useState();
	const [senha, setSenha] = useState();
	const [msgTipo, setMsgTipo] = useState();
	const [msg, setMsg] = useState();

	function cadastrar() {
		setMsgTipo(null);

		if (!email || !senha) {
			setMsgTipo('erro');
			setMsg('Você precisa informar o email e senha para fazer o cadastro!');
			return;
		}

		firebase.auth().createUserWithEmailAndPassword(email, senha).then(() => {
			setMsgTipo('sucesso');
		}).catch((erro) => {
			setMsgTipo('erro');
			switch (erro.message) {
				case 'Password should be at least 6 characters':
					setMsg('A senha deve ter pelo menos 6 caracteres!');
					break;
				case 'The email address is already in use by another account.':
					setMsg('Este email já está sendo utilizado por outro usuário!');
					break;
				case 'The email address is badly formatted.':
					setMsg('O formato do seu email é inválido!');
					break;
				default:
					setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
					break;
			}
		});
	}

	return (
		<S.Container>
			<S.Content>
				<S.Content1>
					<img src={InstaExample} alt="InstaExample" />
				</S.Content1>
				<S.Content2>
					<S.Div1>
						<img src={LogoLarge} alt="LogoInstagram" />
						<form action="">
							<h2>
								Cadastre-se para ver fotos e vídeos de seus
								amigos.
							</h2>
							<BtnContainer>
								<BtnFacebook>
									<S.IconFb>
										<AiFillFacebook />
									</S.IconFb>
									Long in whit Facebook
								</BtnFacebook>
							</BtnContainer>
							<input
								type="text"
								placeholder="Numero de celular ou email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								type="password"
								placeholder="Senha"
								onChange={(e) => setSenha(e.target.value)}
							/>

							<BtnContainer>
								<BtnSingUp type="button" onClick={cadastrar}>Sing up</BtnSingUp>
							</BtnContainer>

							<S.SingUpStatus>
								{msgTipo === 'sucesso' && (
									<span>Usuário cadastrado com sucesso!</span>
								)}
								{msgTipo === 'erro' && (
									<span>{msg}</span>
								)}
							</S.SingUpStatus>

							<div>
								Ao se inscrever, você concorda com nossos Termos
								, Política de Dados e Política de Cookies .
							</div>
						</form>
					</S.Div1>

					<S.Div2>
						<h6>Tem uma conta? Conecte-se</h6>
					</S.Div2>
					<S.Div3>
						<p> Obtenha o aplicativo.</p>
						<S.StoreImg>
							<img src={AppStopre} alt="ApleStore" />
							<img src={GooglePlay} alt="PlayStore" />
						</S.StoreImg>
					</S.Div3>
				</S.Content2>
			</S.Content>
		</S.Container>
	);
}
