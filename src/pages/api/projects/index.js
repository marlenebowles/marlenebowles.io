import { web } from './../../../data/teasers';
export default (req, res) => {
	res.status(200).json(web);
};
