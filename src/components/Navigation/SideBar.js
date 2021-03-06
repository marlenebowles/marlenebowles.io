import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import styled from 'styled-components';

import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';
import { Menu } from './Menu';

const Box = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	background: ${props => props.theme.colors.charcoal};
	z-index: 2;
`;

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 50px 50px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 0.2,
		},
	}),
	closed: {
		clipPath: 'circle(0px at 55px 50px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

const SideBar = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	return (
		<motion.div
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}
		>
			<Box variants={sidebar} />
			<Menu isOpen={isOpen} toggle={() => toggleOpen()} />
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.div>
	);
};

export default SideBar;
