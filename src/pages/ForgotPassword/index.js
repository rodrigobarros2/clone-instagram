import React from 'react';
import * as S from './styles';
import { BtnSingUp } from '../../components/Button/styles';
import Header from './Header/index';

function ForgotPassword() {
	return (
		<>
			<Header />
			<S.Container>
				<S.Content>
					<h4>Trouble Logging In?</h4>
					<p>Enter your username or email and send you a link to get back into your account.</p>
					<input type="text" placeholder="Email,Phone or Username" />
					<BtnSingUp>Send login link</BtnSingUp>
					<h6>OR</h6>
					<h5>Create New Account</h5>
				</S.Content>
			</S.Container>
		</>
	);
}

export default ForgotPassword;
