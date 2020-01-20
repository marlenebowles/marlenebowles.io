import { motion } from 'framer-motion';

const Logo = () => (
	<>
		<motion.svg
			initial={{
				y: -20,
			}}
			width="100"
			height="80"
			viewBox="0 0 90 80"
			fill="none"
		>
			<motion.g>
				<motion.path
					animate={{
						opacity: 0.8,
					}}
					initial={{
						opacity: 1,
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
					transition={{ duration: 0.5, flip: 1 }}
					d="M50.9998 4.48769e-06L11.6509 77L51 77L50.9998 4.48769e-06Z"
					fill="#2E4057"
				/>
			</motion.g>
			<motion.g
				initial={{
					x: 60,
					y: 1,
				}}
			>
				<motion.path
					animate={{
						opacity: 0.8,
					}}
					initial={{
						opacity: 1,
					}}
					transition={{ duration: 0.5, flip: 2 }}
					d="M0 49V0H20.8209L31 12.25V28.2692L0 49Z"
					fill="#F66B5E"
					fill-opacity="0.5"
				/>
				<motion.path
					animate={{
						opacity: 0.8,
					}}
					initial={{
						opacity: 1,
					}}
					transition={{ duration: 0.5, flip: 2 }}
					d="M0 76V24L33 46.8163V64.8571L21.5 76H0Z"
					fill="#F66B5E"
					fill-opacity="0.5"
				/>
			</motion.g>
		</motion.svg>
	</>
);

export default Logo;
