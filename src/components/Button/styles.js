import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnFacebook = styled.button`
	background: #f00;
	font-size: 14px;
	line-height: 18px;
	cursor: pointer;
	font-weight: 600;
	padding: 5px 9px;
	text-align: center;
	text-transform: inherit;
	text-overflow: ellipsis;
	width: auto;
	border-radius: 4px;
	border: 1px solid transparent;
	width: 100%;
	background: #0095f6;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BtnContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const BtnSingUp = styled(BtnFacebook)`
	background: #b2dffc;
	color: #ffffff;
	margin: 10px 0px;
	list-style:none;
	text-decoration: none;
`;

export const BtnLoginFace = styled(BtnFacebook)`
	background: none;
	color: #385185;
	padding: 20px;
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
	color: #ffffff;


    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
		color: #ffffff;
    }
`;
