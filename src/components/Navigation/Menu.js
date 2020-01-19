import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';
import { FlexBox } from '@computapars/flex';

const MenuList = styled(motion.ul)`
	padding: 25px;
	position: absolute;
	top: 100px;
	left: 0;
	bottom: 0;
	right: 0;
`;
const variants = {
	open: {
		opacity: 1,
		x: 0,
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};
const navItems = [
	{ name: 'Projects', slug: '/projects' },
	{ name: 'Music', slug: '/music' },
	{ name: 'Contact', slug: '/contact' },
	{ name: 'About', slug: '/about' },
];

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
