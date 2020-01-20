import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const Button = styled('button')`
	outline: none;
	border: none;
	cursor: pointer;
	display: inline-block;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: transparent;
	z-index: 3;
	position: absolute;
	left: 30px;
	top: 25px;
`;
const Path = props => (
	<motion.path strokeWidth="3" strokeLinecap="round" {...props} />
);

export const MenuToggle = ({ toggle }) => (
	<Button onClick={toggle}>
		<motion.svg width="23" height="23" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: {
						d: 'M 2 2.5 L 20 2.5',
						stroke: 'hsl(0, 0%, 18%)',
					},
					open: {
						d: 'M 3 16.5 L 17 2.5',
						stroke: 'hsl(100%, 100%, 100%)',
					},
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: {
						opacity: 1,
						stroke: 'hsl(0, 0%, 18%)',
					},
					open: {
						opacity: 0,
						stroke: 'hsl(100%, 100%, 100%)',
					},
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: {
						d: 'M 2 16.346 L 20 16.346',
						stroke: 'hsl(0, 0%, 18%)',
					},
					open: {
						d: 'M 3 2.5 L 17 16.346',
						stroke: 'hsl(100%, 100%, 100%)',
					},
				}}
			/>
		</motion.svg>
	</Button>
);
