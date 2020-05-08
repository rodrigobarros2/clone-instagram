import React from 'react';
import './styles';
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import Logo from '../../assets/Icon/LogoLarge.svg';
import * as S from './styles';

export default function Header() {
	return (
		<S.Container>
			<S.Content>
				<S.ContentLogo>
					<img src={Logo} alt="Logo Instagram" style={{ width: 103 }} />
				</S.ContentLogo>
				<S.ContentInput>
					<input type="text" placeholder="Search" />
				</S.ContentInput>

				<S.ContentIcons>
					<AiFillHome />
					<FiSend />
					<AiOutlineHeart />
					<FaUserAlt />
				</S.ContentIcons>
			</S.Content>
		</S.Container>
	);
}
