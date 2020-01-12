import { music } from './../../../data/teasers';
export default (req, res) => {
	res.status(200).json(music);
};
