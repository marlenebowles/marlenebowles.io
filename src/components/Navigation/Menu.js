import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';

const MenuList = styled(motion.ul)`
	padding: 25px;
	position: absolute;
	top: 100px;
	width: 230px;
	z-index: 3;
`;
const variants = {
	open: {
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

export const Menu = ({ toggle }) => (
	<MenuList variants={variants}>
		{navItems.map(i => (
			<MenuItem toggle={toggle} i={i} key={i.name} />
		))}
	</MenuList>
);
