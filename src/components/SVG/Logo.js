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
					d="M25.5 10.5L-8.91965e-05 1.63734e-05L-8.65996e-05 59.4092L25.4999 25.5L25.5 10.5Z"
					fill="#FF6B5E"
					fill-opacity="0.6"
				/>
				<motion.path
					animate={{
						opacity: 0.8,
					}}
					initial={{
						opacity: 1,
					}}
					transition={{ duration: 0.5, flip: 2 }}
					d="M-4.60327e-05 27.5L-8.58307e-05 77L15.4999 77L25.4999 63.5L25.4999 49.5L-4.60327e-05 27.5Z"
					fill="#FF6B5E"
					fill-opacity="0.6"
				/>
			</motion.g>
		</motion.svg>
	</>
);

export default Logo;
