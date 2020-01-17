import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { FlexBox } from '@computapars/flex';

const NavBackground = styled('nav')`
	position: relative;
	z-index: 2004;
	outline: none;
	width: 100%;
	padding-top: 10px;
	display: flex;
	flex-direction: column;
`;
const rightStyles = {
	width: 100,
	height: 80,
	margin: '0 auto',
};

export const Nav = () => (
	<NavBackground>
		<FlexBox justifyContent="center">
			<Link href="/">
				<a>
					<motion.svg
						style={rightStyles}
						whileHover={{ y: -5 }}
						whileTap={{ scale: 0.8 }}
					>
						<motion.g>
							<motion.path
								animate={{
									opacity: 1,
								}}
								transition={{ duration: 2 }}
								initial={{
									opacity: 0.6,
								}}
								d="M7.62939e-06 -4.45856e-06L8.52723e-06 77L39.3489 77L7.62939e-06 -4.45856e-06Z"
								fill="#2E4057"
							/>
							<motion.path
								animate={{
									opacity: 0.6,
								}}
								initial={{
									opacity: 1,
								}}
								d="M50.9998 4.48769e-06L11.6509 77L51 77L50.9998 4.48769e-06Z"
								fill="#2E4057"
							/>
						</motion.g>
						<motion.g
							initial={{
								x: 60,
							}}
						>
							<motion.path
								animate={{
									opacity: 0.8,
								}}
								transition={{ duration: 2 }}
								initial={{
									opacity: 1,
								}}
								d="M38 0L4.48921e-07 1.69198e-05L3.04578e-06 59.4092L38 0Z"
								fill="#FF6B5E"
							/>
							<motion.path
								animate={{
									opacity: 0.8,
								}}
								initial={{
									opacity: 1,
								}}
								d="M38 76.9998L1.21783e-06 17.5906L3.8147e-06 77L38 76.9998Z"
								fill="#FF6B5E"
							/>
						</motion.g>
					</motion.svg>
				</a>
			</Link>
		</FlexBox>
	</NavBackground>
);
