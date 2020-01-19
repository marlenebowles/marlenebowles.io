import react from 'react';
import { motion } from 'framer-motion';
import { FlexBox } from '@computapars/flex';

const Computapars = ({ size }) => (
	<FlexBox justifyContent="center">
		<motion.svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round; */}
			<circle fill="none" stroke="white" cx="12" cy="13.985" r="7.5" />
			<line
				fill="none"
				stroke="white"
				x1="12"
				x2="12"
				y1="6.494"
				y2="0.994"
			/>
			<line
				fill="none"
				stroke="white"
				x1="18.205"
				x2="17.068"
				y1="4.452"
				y2="6.099"
			/>
			<line
				fill="none"
				stroke="white"
				x1="23.491"
				x2="21.5"
				y1="12.435"
				y2="12.628"
			/>
			<line
				fill="none"
				stroke="white"
				x1="4.691"
				x2="6"
				y1="23.006"
				y2="21.494"
			/>
			<line
				fill="none"
				stroke="white"
				x1="19.31"
				x2="18"
				y1="23.006"
				y2="21.494"
			/>
			<line
				fill="none"
				stroke="white"
				x1="0.509"
				x2="2.5"
				y1="12.382"
				y2="12.573"
			/>
			<line
				fill="none"
				stroke="white"
				x1="6.028"
				x2="7.111"
				y1="4.231"
				y2="5.913"
			/>
			<line
				fill="none"
				stroke="white"
				x1="4.5"
				x2="19.5"
				y1="13.994"
				y2="13.994"
			/>
			<line
				fill="none"
				stroke="white"
				x1="5.65"
				x2="18.35"
				y1="9.994"
				y2="9.994"
			/>
			<line
				fill="none"
				stroke="white"
				x1="5.66"
				x2="18.34"
				y1="17.994"
				y2="17.994"
			/>
			<ellipse
				fill="none"
				stroke="white"
				cx="12"
				cy="13.994"
				rx="3"
				ry="7.5"
			/>
		</motion.svg>
	</FlexBox>
);

export default Computapars;
