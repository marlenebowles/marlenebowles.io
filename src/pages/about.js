import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FlexBox } from '@computapars/flex';
import { Container } from '@computapars/layout';
import { Text, H2 } from '@computapars/typography';
import SectionHeader from '../components/SectionHeader';
import {
	EmailIcon,
	GithubIcon,
	LinkedInIcon,
	SpotifyIcon,
} from '@computapars/icon';
import ConditionalLink from './../components/ConditionalLink';

const BackgroundImg = styled.div`
	background: url(selfie.jpg);
	background-position: 60%;
	background-size: cover;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	position: absolute;
	width: 100%;
`;

const StyledIconHover = styled(motion.div)`
	// display: grid;
`;

export default () => (
	<FlexBox>
		<Container>
			<SectionHeader>About.</SectionHeader>
			<FlexBox flexDirection="row">
				<FlexBox
					width={[1 / 2]}
					padding={['30px']}
					flexDirection="column"
					bg="charcoal"
				>
					<FlexBox>
						<Text color="white">
							I'm an experienced Front-End Developer with over
							four years working with React and Redux. I have a
							keen interest in going Full Stack with Node,
							Express, Python and Django.
						</Text>
					</FlexBox>
					<FlexBox>
						<Text color="white">
							You can catch me in Brooklyn, NY where I like to
							explore music, cooking, cats, and history.
						</Text>
					</FlexBox>
					<FlexBox marginTop={['15px']} flexDirection="column">
						<H2 margin={['0']} color="white">
							Contact.
						</H2>

						<Text color="white">
							Have a question or want to work together? Please
							drop me a line via email or social media, I would
							love to hear from you.
						</Text>

						<FlexBox
							marginTop={['15px']}
							width={['75%']}
							alignSelf="center"
							justifyContent="space-between"
						>
							<ConditionalLink
								options={{
									href: 'mailto:marlenebowles@gmail.com',
								}}
							>
								<StyledIconHover
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.97 }}
								>
									<EmailIcon size={'75px'} fill="white" />
								</StyledIconHover>
							</ConditionalLink>
							<ConditionalLink
								options={{
									href: 'https://github.com/marlenebowles',
								}}
							>
								<StyledIconHover
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.97 }}
								>
									<GithubIcon size={'75px'} fill="white" />
								</StyledIconHover>
							</ConditionalLink>
							<ConditionalLink
								options={{
									href:
										'https://www.linkedin.com/in/marlene-bowles-b1248151/',
								}}
							>
								<StyledIconHover
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.97 }}
								>
									<LinkedInIcon size={'75px'} fill="white" />
								</StyledIconHover>
							</ConditionalLink>
							<ConditionalLink
								options={{
									href:
										'https://open.spotify.com/user/marleener',
								}}
							>
								<StyledIconHover
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.97 }}
								>
									<SpotifyIcon size={'75px'} fill="white" />
								</StyledIconHover>
							</ConditionalLink>
						</FlexBox>
					</FlexBox>
				</FlexBox>
				<FlexBox style={{ position: 'relative' }} width={[1 / 2]}>
					<BackgroundImg></BackgroundImg>
				</FlexBox>
			</FlexBox>
		</Container>
	</FlexBox>
);
