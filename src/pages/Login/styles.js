import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 70px;
`;
export const Content = styled.div`
	display: flex;
`;
export const Content1 = styled.div`
	img {
		margin-top: -34px;
	}
`;
export const Content2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 350px;
	height: 100%;

	form {
		display: flex;
		flex-direction: column;
	}

	input {
		margin: 5px 0;
		padding: 8px;
		background: #fafafa;
		border: 1px solid rgba(219, 219, 219, 1);
		border-radius: 2px;
	}
`;

export const Div1 = styled.div`
	border: 1px solid red;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #ffffff;
	padding: 50px;
	border: 1px solid rgba(219, 219, 219, 1);

	h2 {
		font-size: 16px;
		font-weight: 600;
		line-height: 20px;
		padding: 10px 10px;
		text-align: center;
		color: #8e8e8e;
	}
`;

export const StoreImg = styled.div`
	img {
		width: 134px;
	}
`;

export const Div2 = styled.div`
	margin: 20px;
	background: #ffffff;
	padding: 50px;
	border: 1px solid rgba(219, 219, 219, 1);
	width: 100%;
	text-align: center;
	padding: 23.5px;
`;

export const Div3 = styled.div`
	width: 100%;
	text-align: center;
	padding: 0 0 50px 0;

	p {
		padding: 6px 0 20px;
	}
`;

export const IconFb = styled.div`
	margin-right: 5px;
	display: flex;
	align-items: center;
`;

export const SingUpStatus = styled.div`
	margin: 5px 2px 0px;
`;

export const Error = styled.span`
	color: red;
`;
export const Sucess = styled.span`
	color: blue;
`;

export const ForgotPassword = styled(Link)`
	text-decoration: none;
	color: #00376b;
	font-size: 12px;
	line-height: 14px;
	color: #00376b;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
