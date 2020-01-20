import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import SideBar from './SideBar';
import Logo from './../SVG/Logo';
const NavBackground = styled('nav')`
	z-index: 4;
	outline: none;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 100px;
`;

const LogoWrapper = styled('a')`
	position: absolute;
	top: 30px;
`;

export const Nav = props => (
	<NavBackground>
		<SideBar />
		<Link href="/">
			<LogoWrapper>
				<Logo />
			</LogoWrapper>
		</Link>
	</NavBackground>
);
