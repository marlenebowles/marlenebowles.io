import React from 'react';
import { H1 } from '@computapars/typography';
import styled, { css } from 'styled-components';
import { color } from 'styled-system';

const Header = styled(H1)`
	position: relative;
	z-index: ${props => props.theme.zIndices.default};
	${props => css`
		font-size: 3rem;
		margin-bottom: -9px;
		letter-spacing: -0.25rem;
		${props.theme.mediaQueries.sm} {
			font-size: 4.5rem;
			letter-spacing: ${props.theme.letterSpacings.tight};
			margin-bottom: -20px;
			margin-top: 0;
		}
		${props.theme.mediaQueries.lg} {
			font-size: 6rem;
			letter-spacing: ${props.theme.letterSpacings.tight};
			margin-bottom: -20px;
			margin-top: 0;
		}
	`}
	${color}
`;

const SectionHeader = ({ ...props }) => (
	<Header {...props}>{props.children}</Header>
);

export default SectionHeader;
