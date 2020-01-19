import react from 'react';
import { motion } from 'framer-motion';
import { FlexBox } from '@computapars/flex';

const SoundReverie = ({ size }) => (
	<FlexBox justifyContent="center">
		<motion.svg
			width={size}
			height={size}
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				class="st0"
				d="M286.4,125.4V43.1c-9.9-1.4-20.1-2.1-30.4-2.1c-10.3,0-20.4,0.7-30.4,2.1v168c15.4,5.8,26.3,20.6,26.3,38.1    c0,17.4-10.9,32.3-26.3,38v181.7c9.9,1.4,20.1,2.1,30.4,2.1c10.3,0,20.4-0.7,30.4-2.1V201.5c-15.4-5.8-26.3-20.6-26.3-38    C260,146,271,131.2,286.4,125.4z M197,211.1V49.2c-21.9,6.2-42.3,15.8-60.8,28.2v225.2c15.4,5.8,26.4,20.7,26.4,38.1    c0,17.4-11,32.3-26.4,38.1v55.8c18.4,12.4,38.9,22,60.8,28.2V287.2c-15.4-5.8-26.3-20.6-26.3-38.1    C170.7,231.7,181.6,216.9,197,211.1z M41,256c0,61.2,25.6,116.5,66.7,155.6v-32.9c-15.4-5.8-26.3-20.7-26.3-38    c0-17.4,10.9-32.2,26.3-38V100.4C66.6,139.5,41,194.8,41,256z"
			/>
			<path
				class="st0"
				d="M375.7,302.7V77.4c-18.4-12.4-38.9-22-60.8-28.2v76.2c15.4,5.8,26.3,20.6,26.3,38.1c0,17.4-11,32.3-26.3,38.1    v261.3c21.9-6.2,42.3-15.8,60.8-28.2v-55.8c-15.4-5.8-26.4-20.6-26.4-38.1S360.3,308.4,375.7,302.7z M404.3,100.4v202.3    c15.4,5.8,26.4,20.6,26.4,38.1s-11,32.3-26.4,38.1v32.9C445.4,372.5,471,317.2,471,256C471,194.8,445.4,139.5,404.3,100.4z"
			/>
		</motion.svg>
	</FlexBox>
);

export default SoundReverie;
