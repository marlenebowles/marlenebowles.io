import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { H2 } from '@computapars/typography';

const StyledMenuItem = styled(motion.li)`
	z-index: 3;
	list-style: none;
	cursor: pointer;
`;

const ClickableLink = React.forwardRef(({ onClick, href, children }, ref) => {
	return (
		<a href={href} onClick={onClick} ref={ref}>
			{children}
		</a>
	);
});

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
			whileHover={{ y: -3 }}
			whileTap={{ scale: 0.95 }}
		>
			<ClickableLink href={i.slug} onClick={i.toggle}>
				<H2 color="white">{i.name}</H2>
			</ClickableLink>
		</StyledMenuItem>
	);
};
