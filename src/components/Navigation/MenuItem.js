import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';

const StyledMenuItem = styled(motion.li)`
	padding: 25px;
	width: 230px;
	z-index: 3;
`;

const variants = {
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

export const MenuItem = ({ i }) => {
	return (
		<StyledMenuItem
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<Link href={i.slug}>
				<a>{i.name}</a>
			</Link>
		</StyledMenuItem>
	);
};
