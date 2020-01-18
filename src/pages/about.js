import React from 'react';
import styled from 'styled-components';

import { FlexBox } from '@computapars/flex';
import { Container } from '@computapars/layout';
import { Text, H5 } from '@computapars/typography';
import SectionHeader from '../components/SectionHeader';

const BackgroundImg = styled.div`
	height: 100vh;
	background: url(selfie.jpg);
	background-position: 60%;
	background-size: cover;
	position: absolute;
	top: 0;
	left: 50%;
	right: 0;
	bottom: 0;
	z-index: -1;
`;

export default () => (
	<>
		<FlexBox height={'calc(100vh - 95px)'}>
			<BackgroundImg></BackgroundImg>
			<FlexBox width={(1, 1 / 2)} bg="charcoal">
				<Container>
					<FlexBox flexDirection="column">
						<SectionHeader color="white">About.</SectionHeader>
						<FlexBox>
							<Text color="white">
								I'm an experienced Front-End Developer with over
								four years working with React and Redux. I have
								a keen interest in going Full Stack with Node,
								Express, Python and Django.
							</Text>
						</FlexBox>
						<FlexBox>
							<Text color="white">
								You can catch me in Brooklyn, NY where I like to
								explore music, cooking, cats, and history.
							</Text>
						</FlexBox>
						<FlexBox>
							<H5 color="white">Skills</H5>
						</FlexBox>
					</FlexBox>
				</Container>
			</FlexBox>
		</FlexBox>
	</>
);
