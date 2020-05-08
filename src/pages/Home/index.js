import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

export default function Home() {
	return (
		<div>
			<Header />
			<h1>Home</h1>
			<div>
				<h1>{(useSelector((state) => state.usuarioEmail))}</h1>
				<h1>
					Logado:
					{(useSelector((state) => state.usuarioLogado))}
				</h1>
				<h1>Aqui é o Dashboard</h1>
			</div>
		</div>
	);
}
