import React from 'react';
import fetch from 'isomorphic-unfetch';

import { createMarkup } from './../../utils/utilities';
import { FlexBox } from '@computapars/flex';
import { Container } from '@computapars/layout';
import { H1, Text, IntroText, H5 } from '@computapars/typography';
import BadStatus from './../../components/BadStatus';

const Project = props => {
	const { header, body, intro, lessonsLearned } = props.data;
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
					<H1>{header}</H1>
				</Container>
			</FlexBox>
			<Container>
				<FlexBox flexDirection="column">
					<IntroText>{intro}</IntroText>
					<Text
						as="div"
						dangerouslySetInnerHTML={createMarkup(body)}
					/>
				</FlexBox>
				<FlexBox flexDirection="column">
					<H5>Lessons Learned</H5>
					<Text
						as="div"
						dangerouslySetInnerHTML={createMarkup(lessonsLearned)}
					/>
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
