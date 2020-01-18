import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ConditionalLink from './../components/ConditionalLink';
import { FlexBox } from '@computapars/flex';
import { Container } from '@computapars/layout';
import { Text, H5 } from '@computapars/typography';
import SectionHeader from '../components/SectionHeader';
import {
	EmailIcon,
	GithubIcon,
	LinkedInIcon,
	SpotifyIcon,
} from '@computapars/icon';

const StyledIconHover = styled(motion.div)`
	// display: grid;
`;

export default () => (
	<>
		<FlexBox bg="charcoal" width={[1]} height={'calc(100vh - 95px)'}>
			<Container>
				<FlexBox flexDirection="column">
					<SectionHeader color="white">Contact.</SectionHeader>
					<FlexBox>
						<Text color="white">
							Have a question or want to work together?
						</Text>
					</FlexBox>
					<FlexBox justifyContent="space-between">
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
								href: 'https://open.spotify.com/user/marleener',
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
			</Container>
		</FlexBox>
	</>
);
