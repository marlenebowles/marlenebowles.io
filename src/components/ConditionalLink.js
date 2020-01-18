import Link from 'next/link';
import React from 'react';

const ConditionalLink = ({ condition = false, options, children }) => {
	const { href, as, style } = options;
	return condition ? (
		<Link href={href} as={as}>
			<a style={style}>{children}</a>
		</Link>
	) : (
		<a style={style} href={href}>
			{children}
		</a>
	);
};

export default ConditionalLink;
