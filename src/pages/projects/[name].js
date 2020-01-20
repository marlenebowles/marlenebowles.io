import React from 'react';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FlexBox } from '@computapars/flex';
import { Container } from '@computapars/layout';
import { H1, H4, Text, IntroText } from '@computapars/typography';
import { GithubIcon, OpenInNewIcon } from '@computapars/icon';
import ConditionalLink from './../../components/ConditionalLink';

import { createMarkup } from './../../utils/utilities';
import BadStatus from './../../components/BadStatus';

const renderSVGGraphic = name => {
	const Graphic = dynamic(import(`./../../components/SVG/${name}`));
	return <Graphic size={250} />;
};

const StyledIconHover = styled(motion.div)`
	display: inline-flex;
`;
const GithubLink = ({ name, link }) => (
	<ConditionalLink
		options={{
			href: link,
			style: {
				display: 'flex',
				'align-items': 'center',
			},
		}}
	>
		<StyledIconHover>
			<GithubIcon size={'50px'} />
		</StyledIconHover>
		<IntroText
			marginY="0"
			marginX="10px"
			style={{
				display: 'inline-flex',
			}}
		>
			{name}
		</IntroText>
	</ConditionalLink>
);

const UrlLink = ({ name, link }) => (
	<ConditionalLink
		options={{
			href: link,
			style: {
				display: 'flex',
				'align-items': 'center',
				marginTop: '15px',
				marginLeft: '2px',
			},
		}}
	>
		<StyledIconHover>
			<OpenInNewIcon size={'45px'} />
		</StyledIconHover>
		<IntroText
			style={{
				display: 'inline-flex',
			}}
			marginY="0"
			marginX="10px"
		>
			{name}
		</IntroText>
	</ConditionalLink>
);

const renderLinks = (links, props) => {
	const link = links.map(item =>
		item.type === 0 ? (
			<GithubLink key={item.name} {...item} />
		) : (
			<UrlLink key={item.name} {...item} />
		)
	);
	return <FlexBox flexDirection="column">{link}</FlexBox>;
};

const Project = props => {
	const { header, body, intro, lessonsLearned, svgFile, links } = props.data;
	if (props.status !== 200) {
		return <BadStatus />;
	}
	return (
		<>
			<FlexBox
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				height={['80vh']}
				bg="charcoal"
			>
				<Container>
					<H1
						letterSpacing="md"
						margin={'xs'}
						fontFamily="secondary"
						as="h1"
						color="white"
					>
						{header}
					</H1>
					{svgFile && renderSVGGraphic(svgFile)}
				</Container>
			</FlexBox>
			<Container>
				<FlexBox flexDirection="row" flexWrap="wrap" width={1}>
					<FlexBox width={[1, 1, 1, 3 / 4]} flexDirection="column">
						<IntroText marginTop="0">{intro}</IntroText>
						<Text
							as="div"
							fontSize={['md', 'lg']}
							dangerouslySetInnerHTML={createMarkup(body)}
						/>
					</FlexBox>
					<FlexBox width={[1, 1, 1, 1 / 4]} flexDirection="column">
						<FlexBox
							flexDirection="column"
							paddingLeft={[0, 0, 0, 'md']}
						>
							<FlexBox flexDirection="column">
								<H4 margin="0">Lessons Learned</H4>
								<Text
									as="div"
									dangerouslySetInnerHTML={createMarkup(
										lessonsLearned
									)}
								/>
							</FlexBox>
							<FlexBox flexDirection="column">
								<H4 marginY="0 15px">Visit</H4>

								{links &&
									links.length > 0 &&
									renderLinks(links)}
							</FlexBox>
						</FlexBox>
					</FlexBox>
				</FlexBox>
			</Container>
		</>
	);
};

Project.getInitialProps = async ({ query }) => {
	const { name } = query;
	const response = await fetch(
		`http://localhost:3000/api/projects/${encodeURIComponent(name)}`
	);
	const data = await response.json();

	return { data, status: response.status };
};

export default Project;
