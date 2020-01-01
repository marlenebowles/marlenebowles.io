import { useState } from 'react';

export default function useFilter(items) {
	const [filter, setFilter] = useState('all');
	const content =
		filter !== 'all'
			? items.filter(item => {
					return item.categories.some(
						category => category === filter
					);
			  })
			: items;
	return [filter, setFilter, content];
}
