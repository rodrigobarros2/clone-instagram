import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	background: #ffffff;
	justify-content: center;
	width: 100%;
`;

export const Content = styled.div`
	align-items: center;
	display: flex;
	max-width: 800px;
	justify-content: space-between;
	width: 100%;
`;
export const ContentLogo = styled.div`
	padding: 10px 0 4px;
`;
export const ContentInput = styled.form`
	input {
		border: 1px solid rgba(219, 219, 219, 1);
		border-radius: 3px;
		text-align: center;
		padding: 4px 10px;
	}
`;

export const ContentIcons = styled.div`
	svg {
		margin: 0 10px;
		width: 20px;
		height: 20px;
	}
	svg:last-child {
		margin-right: 0px;
	}
`;
