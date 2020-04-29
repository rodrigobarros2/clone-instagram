import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html,body, #root {
	height: 100%;
}
*{
	margin:0;
	padding:0;
	outline: 0;
	box-sizing: border-box;
}
body {
	background: #FAF000;
	font-size:14px;
	font-family: sans-serif;
	height: 100%;
	-webkit-font-smoothing: antialiased;
}
button {
    cursor: pointer;
}
`;
