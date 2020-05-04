import React from 'react';
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

import * as S from './styles';

export default function Register() {
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
							/>
							<input type="text" placeholder="Nome completo " />
							<input type="text" placeholder="Nome de usuário " />
							<input type="password" placeholder="Senha" />
							<BtnContainer>
								<BtnSingUp>Sing up</BtnSingUp>
							</BtnContainer>
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
