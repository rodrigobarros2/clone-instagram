import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction:column;
`;
export const Content = styled.div`
	margin: 40px 0 0;
	width: 350px;
	border: 1px solid red;
	height: 500px;
	padding: 20px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background: #ffffff;
	border: 1px solid rgba(219, 219, 219, 1);
	border-radius: 3px;

	h6 {
		margin: 10px 0;
	}

	h4 {
		margin: 50px 0 0;
	}

	p {
		margin: 10px 0;
	}

	input {
		margin: 5px 0;
		padding: 8px;
		background: #fafafa;
		border: 1px solid rgba(219, 219, 219, 1);
		border-radius: 2px;
		width:100%;
	}
`;
