import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';

import firebase from '../../config/fireConnection';
import 'firebase/auth';

import LogoLarge from '../../assets/Icon/LogoLarge.svg';
import AppStopre from '../../assets/Img/appStore.png';
import GooglePlay from '../../assets/Img/googlePlay.png';
import InstaExample from '../../assets/Img/phone.png';

import {
	BtnSingUp,
	BtnContainer,
	BtnLoginFace,
} from '../../components/Button/styles';


import * as S from './styles';

export default function Login() {
	const [email, setEmail] = useState();
	const [senha, setSenha] = useState();
	const [msgTipo, setMsgTipo] = useState();

	const dispatch = useDispatch();


	function logar() {
		firebase.auth().signInWithEmailAndPassword(email, senha).then(() => {
			setMsgTipo('sucesso');
			setTimeout(() => {
				dispatch({ type: 'LOG_IN', usuarioEmail: email });
			}, 2000);
		}).catch(() => {
			setMsgTipo('erro');
		});
	}

	/* zinanofla@hotmail.com
		123456
	*/

	return (
		<S.Container>
			{useSelector((state) => state.usuarioLogado) > 0 ? <Redirect to="/" /> : null}
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
							<input
								type="email"
								placeholder="Numero de celular, username ou email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								type="password"
								placeholder="Password "
								onChange={(e) => setSenha(e.target.value)}
							/>
							<BtnContainer>
								<BtnSingUp type="button" onClick={logar}>Sing up</BtnSingUp>
							</BtnContainer>
						</form>
						<S.SingUpStatus>
							{msgTipo === 'sucesso' && (
								<S.Sucess>Logado com sucesso</S.Sucess>
							)}
							{msgTipo === 'erro' && (
								<S.Error> Verifique se a senha ou usuário estão corretos!</S.Error>
							)}
						</S.SingUpStatus>
						<BtnContainer>
							<BtnLoginFace>
								<S.IconFb>
									<AiFillFacebook />
								</S.IconFb>
								Long in whit Facebook
							</BtnLoginFace>
						</BtnContainer>

						<S.ForgotPassword to="/forgotpassword">
							<span>Forgot Password?</span>
						</S.ForgotPassword>

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
