import React from 'react';
import './styles';
import Logo from '../../../assets/Icon/LogoLarge.svg';
import * as S from './styles';

export default function Header() {
	return (
		<S.Container>
			<S.Content>
				<S.ContentLogo>
					<img src={Logo} alt="Logo Instagram" style={{ width: 103 }} />
				</S.ContentLogo>
			</S.Content>
		</S.Container>
	);
}
