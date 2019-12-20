import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

const FeaturedBoxContentStyle = styled.div`
	${props => props && props.bgImage ? css`
		background: url(${props.bgImage});
		background-position: 75% 50%;
		background-size: cover;
	` : css`
		background-color: ${props.bgColor}
	`
	}
`

const FeatureBoxContent = (props) => {
	return (
		<Link href={props.href}>
			<FeaturedBoxContentStyle {...props}>
				<div>{props.hoverTag}</div>
				<div>{props.header}</div>
				<div>{props.text}</div>
			</FeaturedBoxContentStyle>
		</Link>
	);
};
export default FeatureBoxContent;
