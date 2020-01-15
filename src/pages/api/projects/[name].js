import { web } from './../../../data/projects';

export default (req, res) => {
	const {
		query: { name },
	} = req;
	const filtered = web.filter(project => project.slug === name);
	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(400).json({ data: 'Project not found' });
	}
};
