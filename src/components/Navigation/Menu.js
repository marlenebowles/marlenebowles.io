import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';
import { FlexBox } from '@computapars/flex';
import { H5 } from '@computapars/typography';
const MenuList = styled(motion.ul)`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	width: 0;
	height: 0;
	overflow: hidden;
	display: flex;
	justify-content: center;
`;
const variants = {
	open: {
		opacity: 1,
		width: '100%',
		height: 'auto',
		transition: {
			staggerChildren: 0.07,
			delayChildren: 0.8,
		},
	},
	closed: {
		height: 0,
		transition: {
			delay: 1,
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};
const navItems = [
	{ name: 'Projects', slug: '/projects' },
	{ name: 'Music', slug: '/music' },
	{ name: 'About', slug: '/about' },
];

const fadeIn = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const Menu = ({ toggle, isOpen }) => (
	<MenuList isOpen={isOpen} variants={variants}>
		<FlexBox
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			{navItems.map(i => (
				<MenuItem toggle={toggle} i={i} key={i.name} />
			))}
		</FlexBox>
	</MenuList>
);
