export default (req, res) => {
	const {
		query: { name },
	} = req;
	res.end(`Post: ${name}`);
};
